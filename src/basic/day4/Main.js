import React from 'react';
import FormResults from './FormResults';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '', 
        email: '',
        description: 'User Bio',
        role: 'STANDARD',
        isEnabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: (target.type === 'checkbox') ? target.checked : target.value
    });
  }

  handleSubmit(event) {
    alert('Submit');
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input name="username" onChange={this.handleChange}
          type="text" value={this.state.username} />
        </label>

        <br/>
        <label>
          Email: <input name="email" onChange={this.handleChange}
          type="email" value={this.state.email} />
        </label>

        <br/>
        <br/>
        <label>
          <input name="isEnabled" type="checkbox" onChange={this.handleChange}
           checked={this.state.isEnabled} /> Enabled
        </label>

        <br/>
        <br/>
        <textarea name="description" onChange={this.handleChange}
          value={this.state.description} rows="4" cols="50" />

        <br/>
        <br/>
        <label>
          User role:
          <select name="role" value={this.state.role} onChange={this.handleChange}>
            <option value="ADMIN">Admin</option>
            <option value="STANDARD">Standard</option>
            <option value="MANAGER">Manager</option>
            <option value="EDITOR">Editor</option>
          </select>
        </label>

        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>

      <br/>
      <br/>
      <FormResults {...this.state} />
    </div>  
    );
  }
}

export default Main;
