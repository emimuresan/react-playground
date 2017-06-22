import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';
import PropTypes from 'prop-types';

const commonStyles = {
    display: 'flex',
    justifyContent: 'center'
};

class SlideShow extends Component {
    state = {
        current: 0
    }

    constructor(props) {
        super(props);
        this.total = React.Children.count(this.props.children);
        this.showNext = this.showNext.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.showNext, 1700);
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
            <div className="slideshow">
                <h4 style={commonStyles}>{this.props.name}</h4>

                <div className="slideshow__images" style={commonStyles}>
                    {childrenArray[this.state.current]}
                </div>
                
                <div className="slideshow__pagination" style={commonStyles}>
                    <Pagination
                        bsSize="medium"
                        items={this.total}
                        activePage={this.state.current + 1} />
                </div>
            </div>
        );
    }
}

SlideShow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object, 
        PropTypes.arrayOf(PropTypes.shape({
            picture: PropTypes.string
        }))
    ]).isRequired
}

export default SlideShow;
