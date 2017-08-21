import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';

const responses = {
    q1Response: 'It is not recommended because browser plugins can inject stuff into <body>',
    q2Response: 'The set state is async, we should use the callback method to verify the state',
    q3Response: 'shouldComponentUpdate method has two parameters, nextProps and nextState, nextState should be used to check the updated state',
    q4Response: 'forceUpdate method ignores shouldComponentUpdate'
};

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {};
    }

    handleButtonClick(ev) {
        this.setState({
            selectedQuiz: ev.target.value
        })
    }

    render() {
        console.log('render ' + this.constructor.name);

        return (
            <main>
                <ButtonGroup bsSize="large" className="btn-toolbar">
                    <Button value="1" onClick={this.handleButtonClick}>Q1</Button>
                    <Button value="2" onClick={this.handleButtonClick}>Q2</Button>
                    <Button value="3" onClick={this.handleButtonClick}>Q3</Button>
                    <Button value="4" onClick={this.handleButtonClick}>Q4</Button>
                </ButtonGroup>
                {this.renderQuizContent()}
            </main>
        );
    }

    renderQuizContent() {
        switch (this.state.selectedQuiz) {
            case "1":
                return <Q1 explanation={responses.q1Response} />;
            case "2":
                return <Q2 explanation={responses.q2Response}/>;
            case "3":
                return <Q3 explanation={responses.q3Response}/>;
            case "4":
                return <Q4 explanation={responses.q4Response}/>;

            default:
                return null;
        }
    }
}

export default Main;
