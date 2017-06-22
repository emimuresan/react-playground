import React, {Component, Children} from 'react';


class SlideShow extends Component {
    state = {
        total: 0,
        current: 0
    }

    constructor() {
        super();
        this.showNext = this.showNext.bind(this);
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    showNext() {
    }

    render() {
        return (
            <div className="slideshow">
            </div>
        );
    }
}

export default SlideShow;




