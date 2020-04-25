import React, { Component } from 'react';

class Header extends React.Component {
    constructor () {
        super();
    }

    render(){
        return (
            <div className="header">
                <h1 className="headerText">Captivating Currency Converter</h1>
                <a href="#ctable" className="navlink navlinks">Currency Table</a>
                <a href="#curexchange" className="navlinks">Currency Converter</a>
            </div>
        )
    }
}

export default Header;