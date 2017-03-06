import React from 'react';
import axios from 'axios';

export default class AddMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input placeholder="New Message" type="text" value={this.state.value} onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={this.props.doMessage.bind(null,this.state.value)}/>
      </form>
      </div>
    );
  }
}
