import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <div className="app__navigation">
            <div className="app__navigation-description">Basic:</div>
            <ButtonToolbar>
            <ButtonGroup bsSize="small" className="app__navigation-toolbar">
                <Button><Link to="/">Home</Link></Button>
                <Button><Link to="/basic/day1">Day1</Link></Button>
                <Button><Link to="/basic/day2">Day2</Link></Button>
                <Button><Link to="/basic/day3">Day3</Link></Button>
                <Button><Link to="/basic/day4">Day4</Link></Button>
                <Button><Link to="/basic/day5">Day5</Link></Button>
                <Button><Link to="/basic/day6">Day6</Link></Button>
                <Button><Link to="/basic/day7">Day7</Link></Button>
            </ButtonGroup>
            </ButtonToolbar>
            
            <div className="app__navigation-description">Advanced:</div>
            <ButtonToolbar>
            <ButtonGroup bsSize="small" className="app__navigation-toolbar">
                <Button><Link to="/">Home</Link></Button>
                <Button><Link to="/advanced/day1">Day1</Link></Button>
                <Button><Link to="/advanced/day2">Day2</Link></Button>
                <Button><Link to="/advanced/day3">Day3</Link></Button>
                <Button><Link to="/advanced/day4">Day4</Link></Button>
                <Button><Link to="/advanced/day5">Day5</Link></Button>
            </ButtonGroup>
            </ButtonToolbar>
      </div>
    );
}

export default AppHeader;