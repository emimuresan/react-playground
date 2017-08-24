import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import Inheritance from './Inheritance';
import Composition1 from './Composition1';
import Composition2 from './Composition2';
import HOC1 from './hoc1';
import HOC2 from './hoc2';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {};
    }

    handleButtonClick(ev) {
        this.setState({
            selectedQuiz: ev.target.value
        });
    }

    render() {
        return (
            <main>
                <ButtonGroup bsSize="large" className="btn-toolbar">
                    <Button value="1" onClick={this.handleButtonClick}>Inheritance</Button>
                    <Button value="2" onClick={this.handleButtonClick}>Composition v1</Button>
                    <Button value="3" onClick={this.handleButtonClick}>Composition v2</Button>
                    <Button value="4" onClick={this.handleButtonClick}>HOC v1</Button>
                    <Button value="5" onClick={this.handleButtonClick}>HOC v2</Button>
                </ButtonGroup>
                {this.renderQuizContent()}
            </main>
        );
    }

    renderQuizContent() {
        switch (this.state.selectedQuiz) {
            case "1":
                return <Inheritance />;
            case "2":
                return <Composition1 />;
            case "3":
                return <Composition2 />;
            case "4":
                return <HOC1 />;
            case "5":
                return <HOC2 />;
            default:
                return null;
        }
    }
}

export default Main;
