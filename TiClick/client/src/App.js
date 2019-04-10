import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { withRouter } from 'react-router-dom'
import { fetchAllUsers, createUser, loginUser } from './services/users';
import { fetchAllCategories, postCategory } from './services/categories'
import decode from 'jwt-decode';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      items: [],
      categories: [],
      currentUser: {},
      name: '',
      password: '',
      email: '',
      username: '',
      title: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handlePostCategory = this.handlePostCategory.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  async componentDidMount() {
    await this.getAllCategories();
    localStorage.getItem("jwt") && await this.setCurrentUser();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  async handleRegister(e) {
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
    e.preventDefault();
    const login = await loginUser({
      email: this.state.email,
      password: this.state.password
    });
    const token = localStorage.setItem('jwt', login.jwt);
    const currentUser = decode(login.jwt)
    this.setState({
      currentUser: currentUser
    })
    this.props.history.push('/users')
  }

  async handleLogout(e){
    localStorage.removeItem('jwt')
    this.props.history.push(`/`);
  }

  async handlePostCategory(e) {
    e.preventDefault();
    const newCategory = await postCategory({
      title: this.state.title,
      user_id: this.state.currentUser.id
    });
    this.setState((prevState) => ({
      categories: [...prevState.categories, newCategory],
      title: ''
    }));
  }

  async setCurrentUser() {
    const currentUser = decode(localStorage.getItem("jwt"))
    this.setState({
      currentUser: currentUser
    })
  }


   async getAllUsers() {
    const users = await fetchAllUsers();
    this.setState({
      users: users
    })
  }

  async getAllCategories() {
    const categories = await fetchAllCategories();
    this.setState({
      categories
    })
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header
          handleLogout={this.handleLogout}
        />
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handleChange={this.handleChange}
          handleRegister={this.handleRegister}
          handlePostCategory={this.handlePostCategory}

          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          username={this.state.username}
          users={this.state.users}
          title={this.state.title}
          categoriesList={this.state.categories}
        />
      </div>
    );
  }
}

export default withRouter(App);
