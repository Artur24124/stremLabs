import axios from 'axios';
import { API, GET_PRODUCTS } from './constants';

export const getProducts = () => {
    return axios.get(`${API}${GET_PRODUCTS}`)
        .then((res) => res.data);
};