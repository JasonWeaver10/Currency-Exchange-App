import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import CurrencyTable from './CurrencyTable';


class Header extends React.Component {
    

    render(){
        return (
            <div className="header">
                <h1 className="headerText">Captivating Currency Converter</h1>
                <Link to="/Home/" className="navlink navlinks">Home</Link>
                <Link to="/Table/" className="navlink navlinks">Currency Table</Link>
                <Link to="/Converter/" className="navlinks">Currency Converter</Link>
            </div>
        )
    }
}

export default Header;