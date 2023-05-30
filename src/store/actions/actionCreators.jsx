import axios from 'axios'
import * as actionTypes from './actionTypes';

export const getCatsImages = (limit, sort) => {
    return (dispatch) => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_${sort}`)
            .then(res =>
                dispatch({
                    type: actionTypes.CATS_GET_SUCCESS,
                    payload: res
                })
            )
            .catch(error => {
                dispatch({
                    type: actionTypes.CATS_GET_FAILURE,
                    error: error.toString(),
                })
            })

    }

}

export const getCategories = () => {
    return (dispatch) => {

        axios.get(`https://api.thecatapi.com/v1/categories`)
            .then(res =>
                dispatch({
                    type: actionTypes.CATEGORIES_GET_SUCCESS,
                    payload: res
                })
            )
            .catch(error => {
                dispatch({
                    type: actionTypes.CATEGORIES_GET_FAILURE,
                    error: error.toString(),
                })
            })

    }

}