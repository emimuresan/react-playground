import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import Form from './Form'

class Main extends Component {
    constructor() {
      super();
      this.state = {
        counter: 0
      };

      this.increment = this.changeCounter.bind(this, 1);
      this.decrement = this.changeCounter.bind(this, -1);
    }

    changeCounter(inc) {
      // Homework: implement a way to increment or decrement by 2 (with 2 setState calls)
    }

    render() {
      console.log('render', this.state);

      return (
        <div className="main">

          <h3>Counter Example</h3>

          <Button bsStyle="primary" onClick={this.increment}> + </Button>
          <span style={{padding: '0 10px'}}>{this.state.counter}</span>
          <Button bsStyle="primary" onClick={this.decrement}> - </Button>

          <h3>Form Example</h3>
          <Form/>

          <hr/>
          <h3>Quiz</h3>
          <a href="https://ecris87.github.io/react-quiz/">Take the React Quiz!</a>
        </div>
      );
   }
}

export default Main;
