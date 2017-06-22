import React from 'react';
import SlideShow from './SlideShow';
import pic1 from '../img/221.jpeg';
import pic2 from '../img/233.jpeg';
import pic3 from '../img/377.jpeg';
import pic4 from '../img/434.jpeg';


class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <main>
            <SlideShow>
                <img src={pic1} alt="pic1" />
                <img src={pic2} alt="pic2" />
                <img src={pic3} alt="pic3" />
                <img src={pic4} alt="pic4" />
            </SlideShow>
        </main>
    );
  }
}

export default Main;

