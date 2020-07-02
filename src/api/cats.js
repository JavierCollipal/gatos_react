import axios from "axios";
import { fetchCat } from "../reducers/cats";
const apiUrl =
  "https://my-json-server.typicode.com/JavierCollipal/json_cats/cats";
const fetchCats = async () => {
  return await axios.get(apiUrl);
};

const catApi = {
  fetchCat,
};
export default catApi;
