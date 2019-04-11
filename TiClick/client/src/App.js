import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { withRouter } from 'react-router-dom'
import { createUser, loginUser } from './services/users';
import { fetchAllCategories, postCategory } from './services/categories'
import { postItem, fetchAllItems } from './services/items';
import decode from 'jwt-decode';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      items: [],
      categories: [],
      currentUser: {},
      userItem: {
        title: '',
        description: '',
        quantity: '',
        category_id: ''
      },
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
    this.handlePostItem = this.handlePostItem.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    // this.handleSelectCategory = this.handleSelectCategory.bind(this);
    // this.handleSubmitCategory = this.handleSubmitCategory.bind(this);
    this.setCategoryId = this.setCategoryId.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
  }

  async componentDidMount() {
    localStorage.getItem("jwt") && await this.setCurrentUser();
    await this.getAllCategories(this.state.currentUser.id);
  }

  async setCurrentUser() {
    const currentUser = decode(localStorage.getItem("jwt"))
    this.setState({
      currentUser: currentUser
    })
  }


  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  handleItemChange(e) {
    const { name, value } = e.target;
    this.setState( prevState => ({
      userItem: {
        ...prevState.userItem,
        [name]: value
      }
    }));
  }

  // handleSelectCategory(e) {
  //   this.setState({
  //     title: e.target.value,
  //     userItem: {
  //       category_id: e.target.id
  //     }
  //   });
  // }
  //
  // handleSubmitCategory(e) {
  //   e.preventDefault();
  //
  //   this.props.history.push('/users/create/inventory/items')
  // }

  setCategoryId(id) {
    this.setState({
      userItem: {
        category_id: id
      }
    });
    this.props.history.push('/users/create/inventory/items')
  }

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
    this.props.history.push(`/users/${newUser.id}`)
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
    await this.getAllCategories(this.state.currentUser.id);
    this.props.history.push(`/users/${currentUser.id}`);
  }

  async handleLogout(e){
    localStorage.removeItem('jwt')
    this.props.history.push('/');
    this.setState({
      currentUser: null
    })
  }

  async handlePostCategory(e) {
    e.preventDefault();
    const newCategory = await postCategory({
      title: this.state.title,
      user_id: this.state.currentUser.id
    });
    this.setState((prevState) => ({
      categories: [...prevState.categories, newCategory],
      title: '',
    }));
    this.props.history.push('/users/create/new/inventory')
  }

  async handlePostItem(e) {
    console.log('clicked');
    e.preventDefault();
    const newItem = await postItem(this.state.userItem, this.state.currentUser.id)
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
      userItem: {
        ...prevState.userItem,
        title: '',
        description: '',
        quantity: '',
      }
    }));
    // this.props.history.push(`/users/${this.state.currentUser.id}`)
  }


  async getAllCategories(id) {
    const categories = await fetchAllCategories(id);
    this.setState({
      categories
    });
  }

  async getAllItems(id, idTwo) {
    const items = await fetchAllItems(id, idTwo)
    this.setState({
      items
    })
  }


  render() {
    console.log(this.state);
    // console.log(this.state.currentUser);
    return (
      <div className="App">
        <Header
          handleLogout={this.handleLogout}
        />
        <Main
          {...this.props}
          handleLoginSubmit={this.handleLoginSubmit}
          handleChange={this.handleChange}
          handleRegister={this.handleRegister}
          handlePostCategory={this.handlePostCategory}
          handlePostItem={this.handlePostItem}
          handleItemChange={this.handleItemChange}
          handleSelectCategory={this.handleSelectCategory}
          handleSubmitCategory={this.handleSubmitCategory}

          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          username={this.state.username}
          users={this.state.users}
          title={this.state.title}
          categoriesList={this.state.categories}
          itemsList={this.state.items}
          currentUser={this.state.currentUser}
          userItem={this.state.userItem}
          items={this.state.items}

          setCategoryId={this.setCategoryId}
          getAllItems={this.getAllItems}
        />
      </div>
    );
  }
}

export default withRouter(App);
