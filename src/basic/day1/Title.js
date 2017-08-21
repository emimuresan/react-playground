import React from 'react';

export default function Title(props) {
    console.log('render Title');
    return <h2>Hi {props.name}!</h2>;
}