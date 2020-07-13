import axios from 'axios';

const apiUrl = 'https://gatos-express.herokuapp.com/api/v1/cats';
const urlWIthId = (url, id) => `${url}/${id}`;
const fetchCats = async () => await axios.get(apiUrl);
const createCat = async catData => await axios.post(apiUrl, catData).then(res => res.data.cat);
const updateCat = async (id, catData) => await axios.put(urlWIthId(apiUrl, id), catData);
const deleteCat = async id => await axios.delete(urlWIthId(apiUrl, id));

const catApi = {
	fetchCats,
	createCat,
	updateCat,
	deleteCat,
};
export default catApi;
