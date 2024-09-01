import axios from 'axios';

const API_URL = 'http://localhost:8080/api/chat';

export const getMessages = () => {
    return axios.get(`${API_URL}/messages`);
};

export const postMessage = (message) => {
    return axios.post(`${API_URL}/messages`, message);
};
