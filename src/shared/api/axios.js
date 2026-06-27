import axios from 'axios';

// Створення API для відправки запитів
export const api = axios.create({
    baseURL: "https://student-app-web-dzdtfbh6ejcpgcdm.westus-01.azurewebsites.net/api",
    withCredentials: true,
    timeout: 10000
});