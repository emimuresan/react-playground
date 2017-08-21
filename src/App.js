import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import 'vanillatoasts/vanillatoasts.css';
import AppHeader from './AppHeader';

import DayOneMain from './basic/day1/Main';
import DayTwoMain from './basic/day2/Main';
import DayThreeMain from './basic/day3/Main';
import DayFourMain from './basic/day4/Main';
import DayFiveMain from './basic/day5/Main';
import DaySixMain from './basic/day6/Main';
import DaySevenMain from './basic/day7/Main';

import ADayOneMain from './advanced/day1/Main';
import ADayTwoMain from './advanced/day2/Main';
import ADayThreeMain from './advanced/day3/Main';
import ADayFourMain from './advanced/day4/Main';
import ADayFiveMain from './advanced/day5/Main';

import store from './basic/day7/redux/store';
import {Provider} from 'react-redux';

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
      <Provider store={store}>
        <Router>

        <div className="app">
          <AppHeader/>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/basic/day1" component={DayOneMain}/>
          <Route path="/basic/day2" component={DayTwoMain}/>
          <Route path="/basic/day3" render={(props) =>
            <DayThreeMain 
              {...props}
              {...extraProps}
              isLoggedIn
              isProtected={false}/>}/>
          <Route path="/basic/day4" component={DayFourMain}/>
          <Route path="/basic/day5" component={DayFiveMain}/>
          <Route path="/basic/day6" component={DaySixMain}/>
          <Route path="/basic/day7" component={DaySevenMain}/>

          <Route path="/advanced/day1" component={ADayOneMain}/>
          <Route path="/advanced/day2" component={ADayTwoMain}/>
          <Route path="/advanced/day3" component={ADayThreeMain}/>
          <Route path="/advanced/day4" component={ADayFourMain}/>
          <Route path="/advanced/day5" component={ADayFiveMain}/>

          <Route path="/quiz" component={QuizMain}/>
        </div>

        </Router>
      </Provider>
    );
  }
}

export default App;
