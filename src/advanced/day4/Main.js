import React from 'react';
import TopicApp from './TopicApp';
import { Route, Link } from 'react-router-dom';

/**
 * If you’ve used Rails, Express, Ember, Angular etc. you’ve used static routing. In these frameworks, 
 * you declare your routes as part of your app’s initialization before any rendering takes place. 
 * 
 * With React Router we have Dynamic Routing: routing that takes place as our app is rendering, 
 * not in a configuration or convention outside of a running app
 */

// when the url matches `/advanced/day4` this component renders
const Main  = (props) => {

  const { match, location, history } = props;

  console.log('-------------- MAIN PROPS -----------------');
  console.log('match', match);
  console.log('location', location);
  console.log('history', history);
  console.log('-------------------------------------------');

  return (
      <div>
        <h3>Routing and Redux</h3>

        <Link to="/advanced/day4/redux-topics">show topics</Link>

        {/** 
        * here's a nested Route, match.url helps us make a relative path 
        */}
        <Route
          path={match.url + '/redux-topics'}
          component={TopicApp}
        />
      </div>
  )
}

export default Main;