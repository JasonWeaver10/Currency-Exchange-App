import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component {
    

    render(){
        return (
            <div className="header">
                <h1 className="headerText">Captivating Currency Converter</h1>
                <Link to="/Home/" className="navlink navlinks">Home</Link>
                <Link to="/Table/" className="navlink navlinks">Currency Table</Link>
                <Link to="/Converter/" className="navlink navlinks">Currency Converter</Link>
                <Link to="/HistoryChart/" className="navlinks">History Chart</Link>
            </div>
        )
    }
}

export default Header;