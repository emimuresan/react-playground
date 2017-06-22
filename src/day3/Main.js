import React from 'react';
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import axios from 'axios';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  /**
   * http://stackoverflow.com/questions/27139366/why-do-the-react-docs-recommend-doing-ajax-in-componentdidmount-not-componentwi
   */
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

    let conditionalButton;
    if (!this.props.isLoggedIn) {
      conditionalButton = <Button>Login</Button>;
    } else {
      conditionalButton = <Button>Logout</Button>;
    }

    let userItems = this.state.users.map((user, index) => {
      return <ListGroupItem key={user.id}>
                <img src={user.avatar_url} alt={user.login} width="80" height="80"/> 
                <a href={user.html_url} style={{paddingLeft: '15px'}} target="_blank">@{user.login}</a>
            </ListGroupItem>;
    });

    return (
        <main>
           <h2>{(this.props.isLoggedIn) ? 'Welcome back' : 'Hello guest'}!</h2>
           {conditionalButton}
           <hr/>

           {(this.state.users.length === 0) ? (
            <div>Loading github users...</div>
           ) : (
            <div>
              <h4>Github Users</h4>
              <ListGroup>{userItems}</ListGroup>
            </div>
           )}
        </main>
    );
  }
}

export default Main;
