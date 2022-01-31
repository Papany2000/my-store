import axios from 'axios';
import { serverUrl } from '../config'

export const getProducts = function (page, pageSize) {
    if(page) {
        return axios.get(serverUrl + '/products' + `${page && '?page=' + page}` + `${pageSize && '&pageSize=' + pageSize}`)
    } else {
        return axios.get(serverUrl + '/products')
    } 
}

export const getProduct = function (id) {
    return axios.get(serverUrl + `/product/${id}`)
}

export const removeProduct = (id) => axios.delete(serverUrl + '/product/' + id)

export const postProduct = (product) => axios.post(serverUrl + '/product/create', product)