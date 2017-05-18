import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Description from './Description';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      name: 'Dana Scully',
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
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  componentWillUnmount() {
    console.log('unmounted day2/Main');
    clearInterval(this.timer);
  }

  render() {
    return (
        <main>
           <h1>React playground {this.state.date.toLocaleTimeString()}</h1>
           <Header name={this.state.name} changeName={this.changeName} isActive={true}/>
           <Description name={this.state.name}/>

           <h2>Counter Example</h2>
           <Button bsStyle="primary" onClick={this.increment}> + </Button>
           {' ' + this.state.counter + ' '}
           <Button bsStyle="primary" onClick={this.decrement}> - </Button>
        </main>
    );
  }
}

export default Main;
