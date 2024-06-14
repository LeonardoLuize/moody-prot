import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://moody-service.vercel.app/v1'
});
