import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      errName: '',
      errpass: '',
      successful: '',
    };
  }
  valid() {
    if (!this.state.name.includes('@') && this.state.password.length < 5) {
      this.setState({
        errName: 'invalid name please include @',
        errpass: 'invalid password please more than 5',
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        errpass: 'invalid password please more than 5',
      });
    }
    if (!this.state.name.includes('*')) {
      this.setState({
        errName: 'invalid name please include *',
      });
    }
    else{
      this.setState({successful:"submitted successful"})
    }
  }
  submit(event) {
    this.setState({
      errName:"",errpass:"",successful:""
    })
    if (this.valid()) {
      alert('form has been submitted');
    }
  }
  render() {
    return (
      <div className="form">
        <label>name</label>
        <br />
        <input
          type="text"
          required
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <p style={{ color: 'red' }}>{this.state.errName}</p>
        <label>password</label>
        <br />
        <input
          type="text"
          required
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <p style={{ color: 'red' }}>{this.state.errpass}</p>
        <p style={{color:"green"}}>{this.state.successful}</p>
        <button onClick={() => this.submit()}>submit</button>
      </div>
    );
  }
}
