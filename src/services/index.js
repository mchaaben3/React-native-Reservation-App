import axios from 'axios';
import url from '../../urls';

const configAxios = (token) => {
  axios.defaults.baseURL = url.baseURL;
  axios.defaults.timeout = 10000;
  // axios.defaults.withCredentials = true;
  if (token && token !== '') {
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  }
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
export default configAxios;
