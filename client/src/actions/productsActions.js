
import {
    GET_PRODUCTS, PRODUCTS_ERROR, 
    GET_PRODUCT, PRODUCT_ERROR
} from '../types';
import axios from 'axios';

const api = 'http://localhost:3000/api/items';

export const getProducts = (query) => async dispatch => {
    try{
        const res = await axios.get(`${api}?q=${query}`)
        dispatch( {
            type: GET_PRODUCTS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: PRODUCTS_ERROR,
            payload: console.log(e),
        })
    }
}

export const getProduct = (id) => async dispatch => {
    try{
        const res = await axios.get(`${api}/${id}`)
        dispatch( {
            type: GET_PRODUCT,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: PRODUCT_ERROR,
            payload: console.log(e),
        })
    }
}