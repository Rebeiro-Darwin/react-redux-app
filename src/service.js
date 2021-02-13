import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/todos';

const service = () => ({
  getData: () => axios.get(baseURL),
});

export default service();