import React from 'react';
import SlideShow from './SlideShow';
import pic1 from '../img/221.jpeg';
import pic2 from '../img/233.jpeg';
import pic3 from '../img/377.jpeg';
import pic4 from '../img/434.jpeg';
import Image from './Image';


class Main extends React.Component {
  render() {
    return (
        <main>
            <SlideShow name="Composition in React">
                <Image picture={pic1} />
                <Image picture={pic2} />
                <Image picture={pic3} />
                <Image picture={pic4} />
            </SlideShow>
        </main>
    );
  }
}

export default Main;

