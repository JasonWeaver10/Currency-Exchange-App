import React, { Component } from 'react';

class CurrencyConverter extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
          <div id="converterdiv">
              <h1 id="curexchange">Currency Exchanger</h1>
              <hr></hr>
            <div className="dropdown d-inline cconverter">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Base Currency
              </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <button className="dropdown-item" type="button">Action</button>
                    <button className="dropdown-item" type="button">Another action</button>
                    <button className="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
             <input className="d-inline cconverter" type="text" placeholder="Value" label="Value"></input>
             <p className="d-inline cconverter">Exchanges To</p>
             <div className="dropdown d-inline cconverter">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Currency Type
              </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Action</button>
                    <button className="dropdown-item" type="button">Another action</button>
                    <button className="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
            <input className="d-inline" type="text" placeholder="Value" label="Value"></input>
            <button className="btn btn-danger d-block" id="exchange">Exchange!</button>

          </div>
        );  
    }
}

export default CurrencyConverter;