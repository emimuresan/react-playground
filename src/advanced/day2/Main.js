import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import faker from 'faker';
import ListItem from './ListItem';

class Main extends Component {
    constructor() {
      super();
      this.state = {
        users: [
          {id: 1, firstName: 'Lionel', lastName: 'Messi'}, 
          {id: 2, firstName: 'Garbiñe', lastName: 'Muguruza'}, 
          {id: 3, firstName: 'Neymar', lastName: 'da Silva'}, 
          {id: 4, firstName: 'Simona', lastName: 'Halep'}
        ]
      };

      this.addUser = this.addUser.bind(this);
      this.switchUsers = this.switchUsers.bind(this);
    }

    addUser(order) {
      let updatedUsers;
      let randomUser = {id: faker.random.uuid(), firstName: faker.name.firstName(), lastName: faker.name.lastName()};
      if (order === 'last') {
        updatedUsers = this.state.users.concat(randomUser);
      } else {
        updatedUsers = [randomUser].concat(this.state.users);
      }
      
      this.setState({users: updatedUsers});
    }

    switchUsers() {
      let length = this.state.users.length - 1;
      let lastUser = this.state.users[length];

      let users1 = this.state.users.slice(0, length - 1);
      let users2 = this.state.users.slice(length - 1, length);
      let updatedUsers = users1.concat(lastUser).concat(users2);
      
      this.setState({users: updatedUsers});
    }

    render() {
      return (
        <div className="main">
          <h3>List Example</h3>

          <ul>
            {this.state.users.map((user, index) => {
              return (<ListItem {...user} />);
            })}
          </ul>

          <Button bsStyle="primary" onClick={() => this.addUser('first')}>Add User (First)</Button>{` or `}
          <Button bsStyle="primary" onClick={() => this.addUser('last')}>Add User (Last)</Button>
          <br/><br/>
          <Button bsStyle="primary" onClick={this.switchUsers}>Switch Users</Button>
        </div>
      );
   }
}

export default Main;
