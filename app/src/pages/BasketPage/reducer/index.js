import { handleActions } from 'redux-actions'

import * as actions from './../actions/index'

const defaultState = {
    basket: {},
    isLoading: false,
    error: null,
    message: null,
    createdAt: null,
}

const postOrder = handleActions({
    [actions.POST_ORDER_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.POST_ORDER_SUCCESS]: (state, { payload }) => ({
        ...state,
        basket: payload.response,
        isLoading: false,
        createdAt: payload.response.createdAt,
    }),
    [actions.POST_ORDER_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        message: payload.response.message,
    }), 
    [actions.CLEAN_ORDER]: (state) => ({
        ...state,
        isLoading: false,
        createdAt: null,
    }), 

}, defaultState)

export default postOrder;