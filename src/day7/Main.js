import React from 'react';
import UserTable from './UserTable';
import UserSummary from './UserSummary';
import {Grid, Row, Col} from 'react-bootstrap';


class Main extends React.Component {
  render() {
    console.log('render ' + this.constructor.name);

    return (
        <main>
           <h2>Users</h2>
           <Grid>
            <Row className="show-grid">
            <Col xs={12} md={8}>
                <UserTable/>
            </Col>
            <Col xs={6} md={4}>
                Summary
            </Col>
            </Row>
           </Grid>
        </main>
    );
  }
}

export default Main;
