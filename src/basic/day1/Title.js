import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {
    console.log('render Title');
    return <h2>Hi {props.name}!</h2>;
}

Title.propTypes = {
    name: PropTypes.string
}