import axios from 'axios';

// const token = 'webtoken';

export default axios.create({
  baseURL: 'http://localhost:9999',
  // baseURL: 'https://10.0.2.4:6443',
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
})