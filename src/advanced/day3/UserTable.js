import React from 'react';
import {Table} from 'react-bootstrap';
import TableHead from './TableHead';
import TableBody from './TableBody';
import PropTypes from 'prop-types';


class UserTable extends React.Component {
  constructor(props) {
    super(props);

    this.tableHeaders = [
        '#', 
        'Avatar',
        'First Name',
        'Last Name',
        'City',
        'State'
    ];
  }

  render() {
    console.log(' > render ' + this.constructor.name);
    
    if (!this.props.users) {
      return <p className="loading">Loading Users...</p>;
    }
    
    return (
      <Table condensed hover>
        <TableHead tableHeaders={this.tableHeaders} />
        <TableBody users={this.props.users} tableHeaderLength={this.tableHeaders.length} />
      </Table>
    );
  }
}

UserTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.object,
    location: PropTypes.object,
    name: PropTypes.object
  }))
}

export default UserTable;