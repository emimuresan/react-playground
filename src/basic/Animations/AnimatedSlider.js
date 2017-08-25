import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './animations.css';

const TRANSITION = {
    SLIDE: 'slide',
    SCALE: 'scale',
    BLUR: 'blur',
    FADE: 'fade'
};

const commonStyles = {
    display: 'flex',
    justifyContent: 'center'
};

class AnimatedSlider extends Component {
    state = {
        current: 0
    };

    constructor(props) {
        super(props);
        this.total = React.Children.count(this.props.children);
        this.showNext = this.showNext.bind(this);

        console.log('CSSTransitionGroup', CSSTransition);
    }

    componentDidMount() {
        this.interval = setInterval(this.showNext, 2500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showNext() {
        this.setState((prevState) => ({
            current: (prevState.current + 1 === this.total) ? 0 : prevState.current + 1
        }));
    }

    render() {
        let childrenArray = React.Children.toArray(this.props.children);
        return (
            <div className="slideshow-animated">
                <h4 style={commonStyles}>{this.props.name}</h4>
                <TransitionGroup className="slideshow__images">
                    <CSSTransition classNames={TRANSITION.SLIDE}
                                   key={this.state.current}
                                   timeout={{enter: 2500, exit: 2500}}>
                        {childrenArray[this.state.current]}
                    </CSSTransition>
                </TransitionGroup>
                <div className="slideshow__pagination" style={commonStyles}>
                    <Pagination
                        bsSize="medium"
                        items={this.total}
                        activePage={this.state.current + 1}/>
                </div>
            </div>
        );
    }
}

AnimatedSlider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.shape({
            picture: PropTypes.string
        }))
    ]).isRequired
};

export default AnimatedSlider;
