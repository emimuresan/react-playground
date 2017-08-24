import React from 'react';
import { Route } from 'react-router-dom';
import DayOneMain from './advanced/day1/Main';
import DayTwoMain from './advanced/day2/Main';
import DayThreeMain from './advanced/day3/Main';
import DayFourMain from './advanced/day4/Main';
import DayFiveMain from './advanced/day5/Main';

// when the url matches `/advanced` this component renders
const AppAdvanced  = ({ match }) => (
    <div>
      {/** 
      * here we have nested Routes, match.url helps us make a relative path 
      */}
      <Route path={match.url + '/day1'} component={DayOneMain} />
      <Route path={match.url + '/day2'} component={DayTwoMain} />
      <Route path={match.url + '/day3'} component={DayThreeMain} />
      <Route path={match.url + '/day4'} component={DayFourMain} />
      <Route path={match.url + '/day5'} component={DayFiveMain} />
    </div>
);

export default AppAdvanced;