import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';


import Header from './Header';
import OtherComponent from './OtherComponent';
// TODO More import examples

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      name: 'Emi',
      counter: 0
    };

    this.changeName = this.changeName.bind(this);
    this.increment = this.changeCounter.bind(this, 1);
    this.decrement = this.changeCounter.bind(this, -1);
  }

  changeName(name) {
    this.setState({name: name});
  }

  changeCounter(inc) {
    console.log('before:', this.state.counter);
    this.setState((prevState) => ({
      counter: prevState.counter + inc
    }));
    this.setState((prevState) => ({
      counter: prevState.counter + inc
    }));
    console.log('after:', this.state.counter);
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.setState({
    //     date: new Date()
    //   })
    // }, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    console.log('render App');
    return (
        <div className="app">
           <h1>React playground {this.state.date.toLocaleTimeString()}</h1>
           <Header name={this.state.name} changeName={this.changeName} isActive={true}/>
           <OtherComponent name={this.state.name}/>

           <br />
           <Button bsStyle="primary" onClick={this.increment}> + </Button>
           {' ' + this.state.counter + ' '}
           <Button bsStyle="primary" onClick={this.decrement}> - </Button>
        </div>
    );
  }
}

export default App;
