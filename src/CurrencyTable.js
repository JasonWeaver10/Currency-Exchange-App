import React, { Component } from 'react';
import SelectCountry from './SelectCountry';

const countryList = [
    "GBP", "CAD", "USD", "AUD", "BGN", "BRL", "CHF", "CNY", "CZK", "DKK", "EUR", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "ZAR"
]


class CurrencyTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: "",
            rates: [],
            date: 'today',
            base: "USD",
        };
    this.handleBaseChange = this.handleBaseChange.bind(this);
    // this.tableCreator = this.tableCreator.bind(this);
    }

    

    fetchRequest = (base) => {
        fetch('https://api.exchangeratesapi.io/latest?base='+(base)).then((response) => {
            console.log(base);
    
         if (response.ok) {
          return response.json();
        }
        throw new Error('Request was either a 404 or 500');
         }).then((data) => {
                this.setState({ 
                    date: data.date,
                    rates: data.rates,
                    base: data.base,
                })
            console.log('json data', data);
            this.tableCreator();
            }).catch((error) => {
            console.log(error);
        })
    }

    handleBaseChange = (event) => {
        console.log("base changed");
        this.setState({value: event.target.value});   
        const base = event.target.value;
        this.fetchRequest(base);
    }

    // selectCreator = () => {
    //     const selectCountry = countryList.map((country) => 
    //     <select>
    //         <option className="option" label={country} value={country}></option>
    //     </select>)
    //     return selectCountry;
    // }

    // tableCreator = () => {
    //     // const countryTable = countryList.map(country)
                
    // }

    componentDidMount () {
        this.fetchRequest(this.state.base);
    }
    
    
    render() {
        return (
          <div id="tablediv">
              <div className="table-dark darkDiv">
              <h1 id="ctable" className="tableheading table-dark">Currency Table</h1>
              <label className="d-inline">
                  Base Currency : 
              <select onChange={this.handleBaseChange}>
                {countryList.map((country) => <option key={country} label={country} value={country}></option>)}
              </select>
              </label>
              <p className="table-dark">Rates are current as of {this.state.date}</p>     
              <table id="curtable" className="table table-dark">
                <tbody>
                  <tr>
                    <th>Currency:</th>
                    <th>Value:</th>
                  </tr>
                      {countryList.map((country) => 
                      <tr>
                      <td>{country} </td>
                      <td>{this.state.rates[country]}</td>
                      </tr>
                      )}
                </tbody>
              </table>
              </div>
          </div>
        );  
    }
}

export default CurrencyTable;