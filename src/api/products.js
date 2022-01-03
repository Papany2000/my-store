import axios from 'axios';
import { serverUrl } from '../config'

export const getProducts = function () {
    return axios.get(serverUrl + '/products')
}

export const postProduct = (product) => axios.post(serverUrl + '/product/create', product)