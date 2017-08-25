import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import 'vanillatoasts/vanillatoasts.css';
import AppHeader from './AppHeader';
import AppAdvanced from './AppAdvanced';
import AppBasic from './AppBasic';
import ComHoc from './advanced/comhoc/Main';
import QuizMain from './dquiz/Main';
import AnimationsMain from './basic/Animations/Main';

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
  isLoggedIn = true
  
  render() {
    return (
      <Provider store={store}>
        <Router>

        <div className="app">
          <AppHeader/>

          <hr/>

          <Route exact path="/" component={Home}/>

          <Route path="/basic" component={AppBasic} />
          <Route path="/advanced" component={AppAdvanced} />
          {/*
          <Route path="/advanced"> // render, component, or nothing for children
            <div>
              <h2>Common header</h2>
              <Route path='/advanced/day1' component={DayOneMain} />
              <Route path='/advanced/day2' component={DayTwoMain} />
              <Route path='/advanced/day3' component={DayThreeMain} />
              <Route path='/advanced/day4' component={DayFourMain} />
              <Route path='/advanced/day5' component={DayFiveMain} />
            </div>
          </Route>
          */}

          <Route path="/quiz" component={QuizMain}/>
          <Route path="/comhoc" component={ComHoc}/>
          <Route path="/animations" component={AnimationsMain}/>
        </div>

        </Router>
      </Provider>
    );
  }
}

export default App;
