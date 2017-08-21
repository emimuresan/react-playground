import React from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row} from 'react-bootstrap';

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
                            (<div><Q4Question/>
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

class Q4Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Next state', nextState);
        if (nextState.counter > 5) {
            return false;
        }

        return true;
    }

    componentDidMount() {
        let incrementCounter = () => {
            this.setState((prevSate) => {
                return {
                    counter: prevSate.counter + 1
                };
            }, () => {
                if (this.state.counter < 10) {
                    if (this.state.counter === 8) {
                        console.log('In');
                        this.forceUpdate();
                        // incrementCounter();
                    } else {
                        console.log('Out');
                        incrementCounter();
                    }
                }
            });
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
