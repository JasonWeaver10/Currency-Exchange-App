import React, { Component } from 'react';

class CurrencyTable extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
          <div id="tablediv">
              <h1 id="ctable" className="tableheading table-dark"> Currency Table</h1>
              <div className="table-dark" id="tableinfo">
                <p className="d-inline table-dark">Table Shows Relative Exchange Rate Compared to 1 unit of   </p>
                <input type="text" placeholder="Base Currency Type" className="d-inline table-dark"></input>
                <p className="table-dark d-inline">   Currency</p>
              </div>
              <table id="curtable" className="table table-dark">
                  <tbody>
                    <tr>
                        <th>Currency</th>
                        <th>Value</th>
                        <th>Currency</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                  </tbody>
              </table>
          </div>
        );  
    }
}

export default CurrencyTable;