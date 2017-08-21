import React from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row} from 'react-bootstrap';

export default class Q2 extends React.Component {
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
                            (<div>
                                <Q2Question />
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

class Q2Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        let incrementCounter = () => {
            this.setState((prevSate) => {
                return {
                    counter: prevSate.counter + 1
                };
            });

            if (this.state.counter < 5) {
                incrementCounter();
            }
        };

        incrementCounter();
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}
