import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { withRouter } from 'react-router-dom'
import { createUser, loginUser } from './services/users';
import { fetchAllCategories, postCategory, deleteCategory, editCategory } from './services/categories'
import { postItem, fetchItems, fetchAllItems } from './services/items';
import decode from 'jwt-decode';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      items: [],
      categories: [],
      selectedCategories: {
        title: '',
        user_id: ''
      },
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
    this.setCategoryId = this.setCategoryId.bind(this);
    this.getAllCategories = this.getAllCategories.bind(this);
    this.destroyCategory = this.destroyCategory.bind(this);
    this.editCategorySubmit = this.editCategorySubmit.bind(this);
    this.setCategoryFormData = this.setCategoryFormData.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this)
    this.getItems = this.getItems.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
  }

  async componentDidMount() {
    localStorage.getItem("jwt") && await this.setCurrentUser();
    localStorage.getItem("jwt") && await this.getAllCategories(this.state.currentUser.id);
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

  handleEditChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      selectedCategories:{
        ...prevState.selectedCategories,
        [name]: value
      }
    }))
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
    this.props.history.push('/')
    alert('Please Login');
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
    this.props.history.push('/user/profile');
  }

  async handleLogout(e){
    localStorage.removeItem('jwt')
    this.props.history.push('/');
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
    this.props.history.push('/users/create/new/inventory');
  }



  async editCategorySubmit(e) {
    e.preventDefault();
    const updateCategory = await editCategory(
      this.state.selectedCategories
    );
    this.setState(prevState =>({
      categories: [
        ...prevState.categories.filter(category => category.id !== updateCategory.id),
        updateCategory
      ]
    }));
    await this.getAllCategories(this.state.selectedCategories.user_id);
  }

  setCategoryId(id) {
    this.setState({
      userItem: {
        category_id: id
      },
    });
    this.props.history.push('/users/create/inventory/items')
  }

  setCategoryFormData(data) {
    this.setState({
      selectedCategories: {
        title: data.title,
        id: data.id,
        user_id: data.user_id
      }
    });
    this.props.history.push('/users/create/new/inventory')
  }


  async getAllCategories(id) {
    const categories = await fetchAllCategories(id);
    this.setState({
      categories
    });
  }


async destroyCategory(user_id, id) {
  const destroyCategory = await deleteCategory(user_id, id);
  this.setState(prevState => ({
    categories: prevState.categories.filter(
      category => category.id !== id
    )
  }))
  this.props.history.push('/users/create/new/inventory')
}

async getItems(id, idTwo, idThree) {
  const items = await fetchItems(id, idTwo, idThree)
  this.setState({
    items
  })
}

async getAllItems(idTwo) {
  const items = await fetchAllItems(this.state.currentUser.id, idTwo)
  this.setState({
    items
  })
  this.props.history.push('/users/view/items')
}



  render() {
    return (
      <div className="App">
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
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

          destroyCategory={this.destroyCategory}
          getAllCategories={this.getAllCategories}

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
          setCategoryFormData={this.setCategoryFormData}
          selectedCategories={this.state.selectedCategories}
          editCategorySubmit={this.editCategorySubmit}
          handleEditChange={this.handleEditChange}
          getAllItems={this.getAllItems}
        />
      </div>
    );
  }
}

export default withRouter(App);
