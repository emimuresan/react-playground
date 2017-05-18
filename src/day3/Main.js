import React from 'react';
import {Button} from 'react-bootstrap'
import axios from 'axios';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users')
      .then((response) => {
        this.setState({
          users: response.data
        });
        console.log(JSON.stringify(response.data[0], undefined, 4));
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log('Main props:', this.props);
    if (this.props.isProtected) {
      return false;
    }

    let button;
    if (!this.props.isLoggedIn) {
      button = <Button>Login</Button>;
    } else {
      button = <Button>Logout</Button>;
    }

    let userItems = this.state.users.map((user, index) => {
      return <li key={user.id}>{user.login}</li>;
    });

    return (
        <main>
           <h1>React playground</h1>
           {button}
           <p>This person is {(this.props.isLoggedIn) ? 'our user' : 'guest'}!</p>
           {(this.state.users.length === 0) ? (
            <div>Loading users...</div>
           ) : (
            <ul>{userItems}</ul>
           )}
        </main>
    );
  }
}

export default Main;