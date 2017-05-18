import React from 'react';


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
           <h1>React playground</h1>
        </main>
    );
  }
}

export default Main;