import api from './api-helper';

const fetchAllCategories = async (id) => {
  const resp = await api.get(`/users/${id}/categories`)
  return resp.data;
}

const postCategory = async (data) => {
  const resp = await api.post(`/users/${data.user_id}/categories`, data)
  return resp.data;
}

const deleteCategory = async (user_id, id) => {
  const resp = await api.delete(`/users/${user_id}/categories/${id}`)
  return resp.data
}

const editCategory = async (data) => {
  console.log("edit cat", data);
  const resp = await api.put(`/users/${data.user_id}/categories/${data.id}`, {category: data})
  return resp.data
}

export {
  fetchAllCategories,
  postCategory,
  deleteCategory,
  editCategory
}
