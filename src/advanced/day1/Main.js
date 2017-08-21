import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import faker from 'faker';

class Main extends Component {
    constructor() {
      super();
      this.state = {
        counter: 0,
        users: [{id: 1, name: 'Gabriel'}, {id: 2, name: 'Ronaldo'}, {id: 3, name: 'Neymar'}, {id: 4, name: 'Simona Halep'}]
      };

      this.increment = this.changeCounter.bind(this, 1);
      this.decrement = this.changeCounter.bind(this, -1);
      this.addUser = this.addUser.bind(this);
    }

    changeCounter(inc) {
      // implement
    }

    addUser() {
      // implement
    }

    render() {
      console.log('render', this.state);
      
      const userItems = this.state.users.map((user, index) => {
        return (
        <li key={user.id}>
          {user.name}
        </li>);
      });

      return (
        <div className="main">

          <h3>Counter Example</h3>

          <Button bsStyle="primary" onClick={this.increment}> + </Button>
          <span style={{padding: '0 10px'}}>{this.state.counter}</span>
          <Button bsStyle="primary" onClick={this.decrement}> - </Button>

          <h3>List Example</h3>
          <ul>{userItems}</ul>
          <Button bsStyle="primary" onClick={this.addUser}>Add Random User</Button>

          <hr/>
          <h3>Quiz</h3>
          <a href="https://ecris87.github.io/react-quiz/">Take the React Quiz!</a>
        </div>
      );
   }
}

export default Main;
