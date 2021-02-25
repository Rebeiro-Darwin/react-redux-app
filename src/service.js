import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const service = () => ({
  getData: () => axios.get(baseURL),
  updateData: (id) => axios.get(`${baseURL}/${id}`),
});

export default service();