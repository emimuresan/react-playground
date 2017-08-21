import React from 'react';

import Title from './Title';

class Header extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.changeName(event.target.value);
    }

    render() {
        return (
            <div>
                <Title name={this.props.name}/>
                <input value={this.props.name} 
                        onChange={this.handleChange} />
            </div>
        )
    }
}

export default Header;