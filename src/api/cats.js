import axios from "axios";

const apiUrl =
  "https://my-json-server.typicode.com/JavierCollipal/json_cats/cats";

const fetchCats = async () => {
  return await axios.get(apiUrl);
};
const createCat = async (data) => await axios.post(apiUrl, data);
const updateCat = async (id, data) => await axios.post(`${apiUrl}/${id}`, data);
const deleteCat = async (id) => await axios.delete(`${apiUrl}/${id}`);

const catApi = {
  fetchCats,
  createCat,
  updateCat,
  deleteCat,
};
export default catApi;
