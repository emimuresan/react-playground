import React from 'react';
import {Table} from 'react-bootstrap';
import Avatar from './Avatar';
import {capitalize} from 'lodash';
import {connect} from 'react-redux';
import {fetchUsers} from './redux/actions';


class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderTableHeaders = this.renderTableHeaders.bind(this);
    this.renderTableRows = this.renderTableRows.bind(this);

    this.tableHeaders = [
        '#', 
        'Avatar',
        'First Name',
        'Last Name',
        'City',
        'State'
    ];

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    let fetchPromise = this.props.dispatch(fetchUsers(150));

    fetchPromise.then(() => {
      this.setState({loading: false});
    });
  }

  render() {
    console.log(' > render ' + this.constructor.name +
      ', users: ' + (this.props.users && this.props.users.length) + 
      ', loading: ', this.state.loading);

    if (this.state.loading) {
      return <p>Loading Users...</p>;
    }
    

    return (
      <Table condensed hover>
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
      return (
        <tr>
          <td colSpan={this.tableHeaders.length} style={{textAlign: 'center', paddingTop: '30px'}}>
            <span>NO USERS</span>
          </td>
        </tr>
      );
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
    return this.tableHeaders.map((header, index) => {
      return <th key={index}>{header}</th>;
    });
  }
}

const mapStateToProps = (storeState) => ({
    users: storeState.users
});

export default connect(mapStateToProps)(UserTable);