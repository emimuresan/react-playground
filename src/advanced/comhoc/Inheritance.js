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

export default class Inheritance extends Component {
    render() {
        return <UsersList/>;
    }
}

class Loader extends Component {
    renderNoUsers() {
        return (
            <tr>
                <td colSpan={tableHeaders.length} style={{textAlign: 'center', paddingTop: '30px'}}>
                    <span>NO USERS</span>
                </td>
            </tr>
        );
    }

    render() {
        return <div className="loader">Loading...</div>;
    }
}

class UsersList extends Loader {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
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
                {this.state.loading ?
                    super.render() :
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
        if (!this.state.users || this.state.users && this.state.users.length === 0) {
            return this.renderNoUsers();
        }

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





