import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

const AddTopicForm = (props) => {
    return (
        <form onSubmit={props.onTopicSubmit}>
            <FormControl
                name="inputHeader"
                type="text"
                placeholder="Enter title"
                value={props.inputHeader}
                onChange={props.onInputChange}/>
            <br />
            <FormControl
                name="inputText"
                componentClass="textarea"
                placeholder="Enter summary"
                value={props.inputText}
                onChange={props.onInputChange}/>
            <br />
            <Button type="submit" bsStyle="primary">Add</Button>
        </form>
    );
}

export default AddTopicForm;