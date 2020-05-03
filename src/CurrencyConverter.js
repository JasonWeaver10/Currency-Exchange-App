import React from 'react';

const countryList = [
    "GBP", "CAD", "USD", "AUD", "BGN", "BRL", "CHF", "CNY", "CZK", "DKK", "EUR", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "ZAR"
]

class CurrencyConverter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value1: 1,
            value2: 1,
            rates: [],
            choice1: 'GBP',
            choice2: 'GBP',
            math1: 1,
            math2: 1,
        }
        this.handleNumChange1 = this.handleNumChange1.bind(this);
        this.handleNumChange2 = this.handleNumChange2.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.fetchRequest = this.fetchRequest.bind(this);
        this.handleMath1 = this.handleMath1.bind(this);
        this.handleMath2 = this.handleMath2.bind(this);

    }
    

    fetchRequest = () => {
        fetch('https://api.exchangeratesapi.io/latest?base='+ (this.state.choice1)).then((response) => {
    
         if (response.ok) {
          return response.json();
        }
        throw new Error('Request was either a 404 or 500');
         }).then((data) => {
                this.setState({ 
                    rates: data.rates,
                })
            console.log('json data', data);
            console.log((this.state.choice1),(this.state.choice2));
            this.setState({math1: this.state.rates[this.state.choice1]});
            this.setState({math2: this.state.rates[this.state.choice2]});
            console.log((this.state.math1),(this.state.math2));
            }).catch((error) => {
            console.log(error);
        })
    }

    handleChange1 = (e) => {
        this.setState({choice1: e.target.value},this.fetchRequest(e.target.value));     
    }

    handleChange2 = (e) => {
        this.setState({choice2: e.target.value},this.fetchRequest(e.target.value));     
    }

    handleNumChange1 = (e) => {
        this.setState({value1: e.target.value}, this.handleMath1(this.state.value1));  
    }

    handleNumChange2 = (e) => {
        this.setState({value2: e.target.value}, this.handleMath2(this.state.value2));  
    }

    handleMath1 = () => {
        const calc1 = ((this.state.math1) * (this.state.value1));
        // this.setState({value2: (calc2)});
    }

    handleMath2 = () => {
        //  const calc2 = this.state.

    }

    render() {
        return (
          <div id="converterOuterDiv">
            <div className="table-dark converterInnerDiv">
              <h1 id="curexchange">Currency Converter</h1>
              <hr></hr>
              <select onChange={this.handleChange1}>
                {countryList.map((country) => <option key={country} label={country} value={country}></option>)}
              </select>
           
              <input onChange={this.handleNumChange1} className="d-inline cconverter" type="number" placeholder="Value" label="Value" value={this.state.value1}></input>
              <p className="d-inline cconverter">Converts To</p>
              <select onChange = {this.handleChange2}>
                {countryList.map((country) => <option key={country} label={country} value={country}></option>)}
              </select>
              <input onChange={this.handleNumChange2} className="d-inline" type="number" placeholder="Value" label="Value" value={this.state.value2}></input>
            </div>
          </div>
        );  
    }
}

export default CurrencyConverter;