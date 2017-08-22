import React from 'react';

import Title from './Title';

class Header extends React.Component {
    escapedText = 'Text';

    reversedText(text) {
        return text.split('').reverse().join('');
    }

    render() {
        console.log('render Header');
        return (
            <div>
                <Title name={this.props.name}/>

                {/* Some example of embedding expressions in JSX */}
                <ul>
                    <li>{this.escapedText}</li>
                    <li>some reversed text: {this.reversedText('alibaba')}</li>
                    <li>{2 + 2}</li>
                </ul>
            </div>
        )
    }
}

export default Header;