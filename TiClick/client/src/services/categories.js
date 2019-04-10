import api from './api-helper';

const fetchAllCategories = async (id) => {
  const resp = await api.get(`/users/${id}/categories`)
  return resp.data;
}

const postCategory = async (data) => {
  const resp = await api.post(`/users/${data.user_id}/categories`, data)
  return resp.data;
}

export {
  fetchAllCategories,
  postCategory
}
