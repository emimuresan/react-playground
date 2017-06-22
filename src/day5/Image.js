import React from 'react';

function Image(props) {
    return <img src={props.picture} 
        alt={props.picture}
        style={{borderRadius: '5px'}}
        width="458px" height="354px"/>;
}

export default Image;