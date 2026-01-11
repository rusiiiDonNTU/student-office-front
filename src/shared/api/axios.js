import axios from 'axios';
import { redirect } from 'react-router-dom';

// Створення API для відправки запитів
export const api = axios.create({
    baseURL: "https://student-app-web-dzdtfbh6ejcpgcdm.westus-01.azurewebsites.net/api",
    withCredentials: true,
    timeout: 10000
});