import React from 'react';
import store, { coverTopic, addTopic } from './redux';
import AddTopicForm from './AddTopicForm';
import TopicList from './TopicList';
import { uniqueId } from 'lodash';

class TopicApp extends React.Component {
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
    console.log('> TopicApp did mount!');

    store.subscribe(() => {
      console.log('> Store state changed!');

      // update local state to match Redux store state
      this.setState({
        topics: store.getState() 
      });

      // reset input fields
      this.setState({
        inputHeader: '',
        inputText: ''
      });
    });
  }

  componentWillUnmount() {
    console.log('> TopicApp has unmounted!');
  }

  handleTopicClick(topicId) {
    let action = coverTopic(topicId);
    store.dispatch(action);
  }

  handleTopicSubmit(ev) {    
    ev.preventDefault();
    
    let topic = {
      id: uniqueId(),
      title: 'New: ' + this.state.inputHeader,
      summary: this.state.inputText,
      covered: false
    }
    
    let action = addTopic(topic);
    store.dispatch(action);
  }

  handleInputChange(ev) {
    this.setState({ 
      [ev.target.name]: ev.target.value 
    });
  }

  render() {
    return (
        <main>
            <h4>Redux Topics</h4>
            <TopicList 
              topics={this.state.topics}
              onTopicClick={this.handleTopicClick}
            />
            
            <hr/>
            <h4>New Topic</h4>
            <AddTopicForm 
              inputText={this.state.inputText} 
              inputHeader={this.state.inputHeader}
              onInputChange={this.handleInputChange}
              onTopicSubmit={this.handleTopicSubmit}
            />
        </main>
    );
  }
}

export default TopicApp;

