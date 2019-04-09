import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { fetchAllUsers, createUser, loginUser } from './services/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: '',
      password: '',
      email: '',
      username: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
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
    const newUser = await createUser({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      username: this.state.username
    });
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      name: '',
      password: '',
      email: '',
      username: ''
    }));
  }

  async handleLoginSubmit(e) {
    console.log('pants')
    e.preventDefault();
    const login = await loginUser({
      email: this.state.email,
      password: this.state.password
    });

    console.log(login)
    localStorage.setItem('jwt', login.jwt);
    this.setState(prevState => ({
      users: [...prevState.users, login],
      email: '',
      password: ''
    }));
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
          handleLoginSubmit={this.handleLoginSubmit}
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
