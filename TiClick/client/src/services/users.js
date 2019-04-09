import api from './api-helper';

const fetchAllUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
};

const createUser = async (user) => {
  console.log(user);
  const mkUser = await api.post('/users/', {"user": user});
  return mkUser.data;
}

export { fetchAllUsers, createUser }
