import React from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getUserSummary} from './redux/reducers';

class UserSummary extends React.Component {
  render() {
    console.log(' > render ' + this.constructor.name, this.props.userSummary && this.props.userSummary.usersTotal);
    const {userSummary} = this.props;

    if (!userSummary) {
      return null;
    }

    return (
        <aside>
            <Panel header="Summary">
                <p>Total Users: <b>{userSummary.usersTotal}</b></p>
                <p>Guys: <b>{userSummary.guys.length}</b></p>
                <p>Gals: <b>{userSummary.gals.length}</b></p>
                <p>Cities: <b>{userSummary.cities.length}</b></p>
                <p>States: <b>{userSummary.states.length}</b></p>
            </Panel>
        </aside>
    );
  }
}

const mapStateToProps = (storeState) => ({ // <--- called on every store change
    userSummary: getUserSummary(storeState) // <--- thus this is also on every store change
});

export default connect(mapStateToProps)(UserSummary);
