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
    axios.get('https://randomuser.me/api/?nat=gb&results=30')
      .then((response) => {
        this.setState({
          users: response.data.results
        });
        console.log('user data:', JSON.stringify(response.data.results[0], undefined, 4));
      })
      .catch((error) => console.log(error));
  }

  render() {
    //console.log('Main props:', this.props);
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
      return <ListGroupItem key={user.id.value}>
                <img src={user.picture.thumbnail} alt={user.login.username} width="48" height="48"
                  title={`${user.name.first} ${user.name.last}`}/>
                <div style={{paddingLeft: '15px', display: 'inline-block'}}>
                  <a href={`mailto:${user.email}`} style={{paddingLeft: '15px'}} target="_blank">@{user.login.username}</a>
                </div>
             </ListGroupItem>;
    });

    return (
        <main>
           <h2>{(this.props.isLoggedIn) ? 'Welcome back' : 'Hello guest'}!</h2>
           {conditionalButton}
           <hr/>

           {(this.state.users.length === 0) ? (
            <div>Loading users...</div>
           ) : (
            <div>
              <h4>Users</h4>
              <ListGroup>{userItems}</ListGroup>
            </div>
           )}
        </main>
    );
  }
}

export default Main;
