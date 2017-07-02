import React from 'react';

const Avatar = (props) => {
    console.log(' > render ' + Avatar.name);
    return (
        <img src={props.src} alt={props.alt} width="48" height="48"/>
    );
}

export default Avatar;