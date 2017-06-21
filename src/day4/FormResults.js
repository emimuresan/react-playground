import React from 'react';
import PropTypes from 'prop-types'; 

function FormResults(props) {
    return (
      <div style={{color: "#999"}}>
          <p><b>Username:</b> {props.username}</p> 
          <p><b>Email:</b> {props.email}</p> 
          <p><b>Description:</b> {props.description}</p> 
          <p><b>Status:</b> {props.isEnabled ? 'Enabled' : 'Disabled'}</p> 
          <p><b>Role:</b> {props.role}</p> 
      </div>
    );
}

FormResults.propTypes = {
    username: PropTypes.string.isRequired,
    description: PropTypes.string,
    email: PropTypes.string,
    isEnabled: PropTypes.bool,
    role: PropTypes.string
}

export default FormResults;
