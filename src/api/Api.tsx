/**
 * create of instance of axios,
 * we can call our route at any where with token
 */
import axios from 'axios';
//@ts-ignore
import {API_URL} from '@env';

const instance = axios.create({
    baseURL: API_URL,
});

export default instance;
