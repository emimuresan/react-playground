import React from 'react';
import './App.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';


import Header from './Header';
import OtherComponent from './OtherComponent';
// TODO More import examples

class App extends React.Component {

  render() {
    const name = 'Dana Scully';
    return (
        <div className="app">
           <h1>React playground</h1>
           <Header name={name}/>
           <OtherComponent name={name}/>
        </div>
    );
  }
}

export default App;
