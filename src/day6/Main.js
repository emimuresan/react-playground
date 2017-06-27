import React from 'react';
import store from './basicRedux';
import { Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';
import { uniqueId } from 'lodash';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      topics: store.getState(),
      inputHeader: '',
      inputText: ''
    }

    this.handleTopicClick = this.handleTopicClick.bind(this);
    this.handleTopicSubmit = this.handleTopicSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log('Store changed => update component');

      // keep local state up-to-date with store state 
      this.setState({
        topics: store.getState()
      });

      // reset add new topic inputs
      this.setState({
        inputHeader: '',
        inputText: ''
      });
    });
  }

  handleTopicClick(topicId) {
    store.dispatch({type: 'COVER_TOPIC', topicId: topicId});
  }

  handleTopicSubmit(ev) {    
    ev.preventDefault();
    
    let newTopic = {
      id: uniqueId(),
      summary: this.state.inputText,
      title: 'Newly Added: ' + this.state.inputHeader,
      covered: false
    }
    store.dispatch({type: 'ADD_TOPIC', topic: newTopic});
  }

  handleInputChange(ev) {
    this.setState({ 
      [ev.target.name]: ev.target.value 
    });
  }

  render() {
    return (
        <main>
            <h2>Redux Topics</h2>
            <ListGroup>{this.renderTopics()}</ListGroup>
            <hr/>
            <h2> New Topic</h2>
            {this.renderAddTopicForm()}
        </main>
    );
  }

  renderTopics() {
    return this.state.topics.map((topic, index) => {
      return <ListGroupItem 
                key={index}
                header={topic.title}
                href={topic.link}
                onClick={() => this.handleTopicClick(topic.id)}>

                {(topic.covered) ?
                  <span style={{textDecoration: 'line-through'}}>{topic.summary}</span>
                :
                  <span>{topic.summary}</span>
                }
              </ListGroupItem>;
    });
  }

  renderAddTopicForm() {
    return (<form onSubmit={this.handleTopicSubmit}>
        <FormControl
            name="inputHeader"
            type="text"
            placeholder="Enter title"
            value={this.state.inputHeader}
            onChange={this.handleInputChange}/>
        <br />
        <FormControl
            name="inputText"
            componentClass="textarea"
            placeholder="Enter summary"
            value={this.state.inputText}
            onChange={this.handleInputChange}/>
        <br />
        <Button type="submit" bsStyle="primary">Add</Button>
      </form>);
  }
}

export default Main;

