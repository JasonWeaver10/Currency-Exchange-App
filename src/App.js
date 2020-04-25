import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CurrencyTable from './CurrencyTable';
import CurrencyConverter from './CurrencyConverter';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <hr></hr>
      <div>
        <p>Welcome! This app was designed with React as a project </p>
      </div>
        <CurrencyTable/>
      <hr></hr>
        <CurrencyConverter/> 
      <hr></hr>
        <Footer/>
    </div>
  );
}

export default App;
