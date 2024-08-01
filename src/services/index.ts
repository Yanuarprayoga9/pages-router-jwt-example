import axios from 'axios';

const headers = {
  Accept: 'application/json',
};

const api = axios.create({
  baseURL: `http://localhost:8080`,
  headers,
});

if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
  
export const getPosts = async () => {
    try {
        const res = await api.get(`/posts`)
        console.log(res)
        return res.data
    } catch (error) {
        return []
    }
}
export default api;