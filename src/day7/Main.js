import React from 'react';
import UserTable from './UserTable';
import UserSummary from './UserSummary';
import {Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';


class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      users: null
    };

    this.userTableHeaders = [
        '#', 
        'Avatar',
        'First Name',
        'Last Name',
        'City',
        'State'
    ];
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?nat=us&results=150')
      .then((response) => {
        this.setState({
          users: response.data.results
        });
        //console.log('user data:', JSON.stringify(response.data.results[0], undefined, 4));
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log('render ' + this.constructor.name, this.state.users && this.state.users.length);

    return (
        <main>
           <h2>Users</h2>
           <Grid>
            <Row className="show-grid">
            <Col xs={12} md={8}>
                <UserTable users={this.state.users} tableHeaders={this.userTableHeaders}/>
            </Col>
            <Col xs={6} md={4}>
                <UserSummary users={this.state.users}/>
            </Col>
            </Row>
           </Grid>
        </main>
    );
  }
}

export default Main;
