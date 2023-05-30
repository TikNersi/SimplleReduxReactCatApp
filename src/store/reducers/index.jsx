import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isLoading: true,
    catsArray: [],
    category: [],
    errors: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATS_GET_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                catsArray: action.payload
            }
        }
        case actionTypes.CATS_GET_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            }
        }
        case actionTypes.CATEGORIES_GET_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                category: action.payload
            }
        }
        case actionTypes.CATEGORIES_GET_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            }
        }
        default: return state

    }
}