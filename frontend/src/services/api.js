import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Change to your backend URL if different
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if needed
  },
});

export default api;