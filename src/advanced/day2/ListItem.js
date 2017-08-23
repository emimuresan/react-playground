import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName
        };
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        this.setState({
          [target.name]: target.value
        });
    }
    
    render() {
      console.log('render listitem: ', this.props.firstName);

      return (
        <li className="list-item">
            <span>{this.props.firstName + ' ' + this.props.lastName}</span>

            <input name="firstName" className="form-control" onChange={this.handleChange} type="text" value={this.state.firstName} />
        </li>
      );
   }
}

export default ListItem;
