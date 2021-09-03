import { handleActions } from 'redux-actions'

import * as actions from './../actions/index'

const defaultState = {
    orders: [],
    isLoading: false,
    message: null,
}

const personalAccountPageReducer = handleActions({
    [actions.GET_COUNT_OF_ORDER_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.GET_COUNT_OF_ORDER_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        orders: payload.response,
    }),
    [actions.GET_COUNT_OF_ORDER_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        message: payload.response,
    }),
}, defaultState)

export default personalAccountPageReducer;