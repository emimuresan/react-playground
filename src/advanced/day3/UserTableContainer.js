import React from 'react';
import PropTypes from 'prop-types';
import UserTable from './UserTable';
import {connect} from 'react-redux';
import {fetchUsers} from './redux/actions';


class UserTableContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers(150));
  }

  render() {
    return (<UserTable users={this.props.users} />);
  }
}

const mapStateToProps = (state) => ({
    users: state.users
});

UserTableContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.object,
    location: PropTypes.object,
    name: PropTypes.object
  }))
}

export default connect(mapStateToProps)(UserTableContainer);