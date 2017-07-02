import React from 'react';
import {Table} from 'react-bootstrap';
import Avatar from './Avatar';
import {capitalize} from 'lodash';


class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderTableHeaders = this.renderTableHeaders.bind(this);
    this.renderTableRows = this.renderTableRows.bind(this);
  }

  render() {
    console.log(' > render ' + this.constructor.name, this.props.users && this.props.users.length);

    return (
      <Table bordered condensed hover>
        <thead>
          <tr>
            {this.renderTableHeaders()}
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </Table>
    );
  }

  renderTableRows() {
    if (!this.props.users) {
      return null;
    }
    
    return this.props.users.map((user, index) => {
      return (
        <tr key={user.id.value}>
          <td>{index + 1}</td>
          <td><Avatar src={user.picture.thumbnail} alt={user.login.username}/></td>
          <td><span>{capitalize(user.name.first)}</span></td>
          <td><span>{capitalize(user.name.last)}</span></td>
          <td><span>{capitalize(user.location.city)}</span></td>
          <td><span>{user.location.state.toUpperCase()}</span></td>
        </tr>
      );
    });
  }

  renderTableHeaders() {
    if (!this.props.tableHeaders) {
      return null;
    }

    return this.props.tableHeaders.map((header, index) => {
      return <th key={index}>{header}</th>;
    });
  }
}

export default UserTable;
