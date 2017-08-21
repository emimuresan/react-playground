import React from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row} from 'react-bootstrap';

class Q1 extends React.Component {
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
                {this.renderFirstQuestion()}
                {this.renderSecondQuestion()}
            </div>
        );
    }

    renderFirstQuestion() {
        return (
            <Grid>
                <Row className="show-grid">
                    <h1>Can we use 'body' as react root element?</h1>
                </Row>
                <Row>
                    {this.state.first ?
                        (<h3 style={{color: 'green'}}>- Yes, we can</h3>) :
                        (<Button value="first" onClick={this.handleShowResult}>Show response</Button>)
                    }
                </Row>
            </Grid>
        )
    }

    renderSecondQuestion() {
        if (!this.state.first) {
            return null;
        }

        return (
            <Grid>
                <Row className="show-grid">
                    <h1>Is recommended to use 'body' as react root element?</h1>
                </Row>
                <Row>
                    {this.state.second ?
                        (<div>
                            <h3 style={{color: 'green'}}>- Nope -<span>{this.props.explanation}</span></h3>
                        </div>) :
                        (<Button value="second" onClick={this.handleShowResult}>Show response</Button>)
                    }
                </Row>
            </Grid>
        )
    }
}

export default Q1;
