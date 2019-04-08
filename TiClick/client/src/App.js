import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: '',
      password: '',
      email: '',
      user_name: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          handleChange={this.handleChange}
          password={this.state.password}
          userName={this.state.user_name}
        />
      </div>
    );
  }
}

export default App;
