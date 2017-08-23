import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {capitalize} from 'lodash';
import {Button} from 'react-bootstrap';
import './loader.css';

import axios from 'axios';

const tableHeaders = [
    '#',
    'First Name',
    'Last Name'
];

export default class Composition extends Component {
    render() {
        return <UsersList/>;
    }
}

class Loader extends Component {
    renderNoUsers() {
        return (
            <div style={{textAlign: 'center', paddingTop: '30px'}}>
                <span>NO USERS</span>
            </div>
        );
    }

    render() {
        if (this.props.noData) {
            return this.renderNoUsers();
        }

        return <div className="loader">Loading...</div>;
    }
}

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: false
        };

        this.handleUsersLoad = this.handleUsersLoad.bind(this);
    }

    handleUsersLoad() {
        this.setState({
            loading: true
        });

        axios.get('https://randomuser.me/api/?nat=gb&results=30')
            .then((response) => {
                this.setState({
                    users: response.data.results,
                    loading: false
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    loading: false
                });
            });
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleUsersLoad}>Load users</Button>
                {this.state.loading || this.state.users.length === 0 ?
                    <Loader noData={this.state.users.length === 0 && !this.state.loading} /> :
                    (<Table condensed hover>
                        <thead>
                        <tr>
                            {this.renderTableHeaders()}
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderTableRows()}
                        </tbody>
                    </Table>)
                }
            </div>
        );
    }

    renderTableRows() {
        return this.state.users.map((user, index) => {
            return (
                <tr key={user.id.value}>
                    <td>{index + 1}</td>
                    <td><span>{capitalize(user.name.first)}</span></td>
                    <td><span>{capitalize(user.name.last)}</span></td>
                </tr>
            );
        });
    }

    renderTableHeaders() {
        return tableHeaders.map((header, index) => {
            return <th key={index}>{header}</th>;
        });
    }
}





