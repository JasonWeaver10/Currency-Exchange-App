import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CurrencyTable from './CurrencyTable';
import CurrencyConverter from './CurrencyConverter';
import Footer from './Footer';
import Header from './Header';
import myImage from './jason-leung-SAYzxuS1O3M-unsplash.jpg'

const Home = () => {
  return (
      <div>
        <h1 className="table-dark welcome">Welcome!</h1>
        <p className="table-dark welcome">This app was designed with React for an online class. It also makes use of FontAwesome, Bootstrap, React Router, and Unsplash </p>
        <img className="heroImage"src={myImage}/>
      </div>
  )
}

const Table = () => {
  return (
    <div>
     <CurrencyTable/>
    </div>
  )
}

const Converter = () => {
  return (
    <div>
      <CurrencyConverter/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div>
          <Route path="/Home/" component={Home} />
          <Route path='/Table/' component={Table} />
          <Route path='/Converter/' component={Converter} />
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
