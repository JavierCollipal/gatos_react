import axios from "axios";

const apiUrl =
  "https://my-json-server.typicode.com/JavierCollipal/json_cats/cats";
const fetchCats = async () => {
  return await axios.get(apiUrl);
};

const catApi = {
  fetchCats,
};
export default catApi;
