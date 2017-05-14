import React from 'react';

class Title extends React.Component {
    render() {
        console.log('render Title');
        return (
            <div>
                <h2>Hi {this.props.name}!</h2>
                <ul>
                    <li>Elem 1</li>
                    <li>Elem 2</li>
                    <li>Elem 3</li>
                </ul>
            </div>
        )
    }
}

export default Title;