import React from 'react';
import {Panel} from 'react-bootstrap';
import {uniq as unique} from 'lodash';


class UserSummary extends React.Component {
  constructor(props) {
    super(props);
    this.males = [];
    this.females = [];
    this.cities = [];
    this.states = [];
    this.usersTotal = 0;
  }

  componentWillReceiveProps(props) {
    if (props.users) {
        this.males = props.users.filter((user) => user.gender === 'male');
        this.females = props.users.filter((user) => user.gender === 'female');
        this.cities = unique(props.users.map((user) => user.location.city));
        this.states = unique(props.users.map((user) => user.location.state));
        this.usersTotal = props.users.length;
    }
  }

  render() {
    console.log(' > render ' + this.constructor.name, this.props.users && this.props.users.length);

    return (
        <aside>
            <Panel header="Summary">
                <p>Total Users: <b>{this.usersTotal}</b></p>
                <p>Guys: <b>{this.males.length}</b></p>
                <p>Gals: <b>{this.females.length}</b></p>
                <p>Cities: <b>{this.cities.length}</b></p>
                <p>States: <b>{this.states.length}</b></p>
            </Panel>
        </aside>
    );
  }
}

export default UserSummary;
