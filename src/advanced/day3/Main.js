import React from 'react';
import UserTableContainer from './UserTableContainer';
import UserSummary from './UserSummary';
import {Grid, Row, Col} from 'react-bootstrap';

const tableContainerStyle = {
    height: 700, 
    overflow: 'auto', 
    border: '1px solid #cccccc', 
    padding: 0, 
    borderRadius: '3px'
};

class Main extends React.Component {
  render() {
    console.log('render > ' + this.constructor.name);

    return (
        <main>
           <h2>Users</h2>
           <Grid>
            <Row className="show-grid">
            <Col xs={12} md={8} style={tableContainerStyle}>
                <UserTableContainer />
            </Col>
            <Col xs={6} md={4}>
                <UserSummary />
            </Col>
            </Row>
           </Grid>
        </main>
    );
  }
}

export default Main;
