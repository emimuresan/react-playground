import React from 'react';
import Header from './Header';
import Description from './Description';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Dana Scully'
    };
  }

  render() {
    console.log('render Main');
    return (
        <main>
           <Header name={this.state.name}/>
           <Description name={this.state.name}/>
        </main>
    );
  }
}

export default Main;
