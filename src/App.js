import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import './App.css';
import 'vanillatoasts/vanillatoasts.css';

import DayOneMain from './day1/Main';
import DayTwoMain from './day2/Main';
import DayThreeMain from './day3/Main';
import DayFourMain from './day4/Main';
import DayFiveMain from './day5/Main';
import DaySixMain from './day6/Main';
import DaySevenMain from './day7/Main';

import showdown from 'showdown';
import README from '../README.md';
const README_DECODED = atob(README.replace('data:text/x-markdown;base64,', ''));
const converter = new showdown.Converter();
const readMeHtml = converter.makeHtml(README_DECODED);


class Home extends React.Component {  
    rawMarkup() {
      return { __html: readMeHtml};
    }
    render() {
      return <div className="readme" dangerouslySetInnerHTML={this.rawMarkup()} />;
   }
}


class App extends React.Component {

  render() {
    let extraProps = {
      color: 'red',
      style: 'blue'
    };

    return (
      <Router>

        <div className="app">
          <ButtonToolbar>
            <ButtonGroup bsSize="large" className="app__navigation">
              <Button><Link to="/">Home</Link></Button>
              <Button><Link to="/day1">Day1</Link></Button>
              <Button><Link to="/day2">Day2</Link></Button>
              <Button><Link to="/day3">Day3</Link></Button>
              <Button><Link to="/day4">Day4</Link></Button>
              <Button><Link to="/day5">Day5</Link></Button>
              <Button><Link to="/day6">Day6</Link></Button>
              <Button><Link to="/day7">Day7</Link></Button>
            </ButtonGroup>
          </ButtonToolbar>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/day1" component={DayOneMain}/>
          <Route path="/day2" component={DayTwoMain}/>
          <Route path="/day3" render={(props) => 
            <DayThreeMain 
              {...props}
              {...extraProps}
              isLoggedIn
              isProtected={false}/>}/>
          <Route path="/day4" component={DayFourMain}/>
          <Route path="/day5" component={DayFiveMain}/>
          <Route path="/day6" component={DaySixMain}/>
          <Route path="/day7" component={DaySevenMain}/>
        </div>

      </Router>
    );
  }
}

export default App;
