import axios from 'axios';


export default function setAuth(token) { // eslint-disable-line
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}
