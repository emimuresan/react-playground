import React from 'react';
import { Route } from 'react-router-dom';
import DayOneMain from './basic/day1/Main';
import DayTwoMain from './basic/day2/Main';
import DayThreeMain from './basic/day3/Main';
import DayFourMain from './basic/day4/Main';
import DayFiveMain from './basic/day5/Main';
import DaySixMain from './basic/day6/Main';
import DaySevenMain from './basic/day7/Main';

const extraProps = {
    color: 'red',
    style: 'blue'
};

// when the url matches `/basic` this component renders
const AppBasic = ({ match }) => (
    <div>
        <h2>Common Header: Basic Workshop</h2>
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
    </div>
);

export default AppBasic;