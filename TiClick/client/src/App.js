import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { fetchAllUsers, createUser } from './services/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
        name: '',
        password: '',
        email: '',
        username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.getAllUsers();
  }

   async getAllUsers() {
    const users = await fetchAllUsers();
    this.setState({
      users: users
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      username: this.state.username
    }
    createUser(newUser);
    await this.getAllUsers();
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
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          username={this.state.username}
          users={this.state.users}
        />
      </div>
    );
  }
}

export default App;
