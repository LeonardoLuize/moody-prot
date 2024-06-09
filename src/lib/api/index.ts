import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://moody-recomendation-service.vercel.app/v1'
});
