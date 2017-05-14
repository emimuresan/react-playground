import React from 'react';

import Title from './Title';

class Header extends React.Component {
    render() {
        console.log('render Header');
        return (
            <div>
                <Title name={this.props.name}/>
            </div>
        )
    }
}

export default Header;