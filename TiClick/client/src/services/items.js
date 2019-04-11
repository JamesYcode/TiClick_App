import api from './api-helper';

const fetchAllItems = async (data) => {
  const resp = await api.get(`/categories/${data.category_id}/items`);
  return resp.data;
}

const postItem = async (data) => {
  const resp = await api.post(`/categories/${data.category_id}/items`, data);
  return resp.data;
}


export {
  fetchAllItems,
  postItem
};
