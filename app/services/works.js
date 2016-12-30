import axios from 'axios';

const service = {
  getWorks: () => axios.get('/works', {})
};

export default service;
