import React from 'react';
import SlideShow from './SlideShow';
import AnimatedSlider from './AnimatedSlider';
import pic1 from '../../img/221.jpeg';
import pic2 from '../../img/233.jpeg';
import pic3 from '../../img/377.jpeg';
import pic4 from '../../img/434.jpeg';
import Image from './Image';
import {ButtonGroup, Button} from 'react-bootstrap';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            selectedSliderType: 'Animated'
        };
    }

    handleButtonClick(ev) {
        this.setState({
            selectedSliderType: ev.target.value
        });
    }

    render() {
        return (
            <main>
                <ButtonGroup bsSize="large" className="btn-toolbar">
                    <Button value="Simple" onClick={this.handleButtonClick}>Simple Slide Show</Button>
                    <Button value="Animated" onClick={this.handleButtonClick}>Animated Slide Show</Button>
                </ButtonGroup>
                <div className="animation-container">
                    {this.state.selectedSliderType === 'Simple' ?
                        <SlideShow name="Simple slider">
                            <Image picture={pic1}/>
                            <Image picture={pic2}/>
                            <Image picture={pic3}/>
                            <Image picture={pic4}/>
                        </SlideShow>
                        :
                        <AnimatedSlider name="Animated slider">
                            <Image key={pic1} picture={pic1}/>
                            <Image key={pic2} picture={pic2}/>
                            <Image key={pic3} picture={pic3}/>
                            <Image key={pic4} picture={pic4}/>
                        </AnimatedSlider>
                    }
                </div>
            </main>
        );
    }
}

export default Main;

