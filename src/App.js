import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CurrencyTable from './CurrencyTable';
import CurrencyConverter from './CurrencyConverter';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <p>Welcome! This app was designed with React as a project </p>
      </div>
      <CurrencyTable/>
      <CurrencyConverter/> 
      <Footer/>
    </div>
  );
}

export default App;
