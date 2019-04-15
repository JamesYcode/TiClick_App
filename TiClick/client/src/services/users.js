import api from './api-helper';

const fetchAllUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
};

const createUser = async (user) => {
  const mkUser = await api.post('/users/', {"user": user});
  return mkUser.data;
}

const loginUser = async (loginData) => {
 const resp = await api.post(`/user_token`, { auth: loginData });
 return resp.data;
}






export { fetchAllUsers, createUser, loginUser }
