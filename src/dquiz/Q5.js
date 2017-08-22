import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {Grid, Row} from 'react-bootstrap';
import axios from 'axios';

export default class Q4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleShowResult = this.handleShowResult.bind(this);
    }

    handleShowResult(ev) {
        this.setState({
            [ev.target.value]: true
        });
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <h1>What will the following component display?</h1>
                    </Row>
                    <Row>
                        {this.state.first ?
                            (<div><Q5Question/>
                                <span style={{color: 'green'}}>{this.props.explanation}</span>
                            </div>) :
                            (<Button value="first" onClick={this.handleShowResult}>Show response</Button>)
                        }
                    </Row>
                </Grid>
            </div>
        );
    }
}

class Q5Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'John',
            lastName: 'Doe'
        }
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=gb&results=30')
            .then((response) => {
                let userData = response.data.results[0].name;
                this.setState({
                    firstName: userData.first,
                    lastName: userData.last
                });
                console.log('user data:', JSON.stringify(response.data.results[0], undefined, 4));
            })
            .catch((error) => console.log(error));


        this.setState({
            firstName: 'Jon',
            lastName: 'Snow'
        });
    }

    render() {
        return <Name firstName={this.state.firstName} lastName={this.state.lastName}/>
    }
}

class Name extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: `${props.firstName} ${props.lastName}`
        }
    }

    render() {
        return (<h1>My name is: {this.state.name}</h1>);
    }
}

Name.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
};
