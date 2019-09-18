import axios from 'axios';
const dev = process.env.NODE_ENV === 'development' && true;

let baseURL;

if (dev) {
  baseURL = 'http://localhost:5000/api/v1';
} else {
  baseURL = 'https://airpack-node.herokuapp.com/api/v1';
}

export const airpackAPI = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
