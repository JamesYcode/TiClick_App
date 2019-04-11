import api from './api-helper';

const fetchAllItems = async (user_id, category_id) => {
  const resp = await api.get(`/users/${user_id}/categories/${category_id}/items`);
  return resp.data;
}

const postItem = async (data) => {
  const resp = await api.post(`/users/${data.user_id}/categories/${data.category_id}/items`, data);
  return resp.data;
}


export {
  fetchAllItems,
  postItem
};
