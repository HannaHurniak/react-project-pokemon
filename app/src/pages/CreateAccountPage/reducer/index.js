import { handleActions } from 'redux-actions'

import * as actions from './../actions/index'

const defaultState = {
    isLoading: false,
    success: false,
    errors: null,
    message: null
}

const CreateAccountPageReducer = handleActions({
    [actions.CREATE_ACCOUNT_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
        success: false
    }),
    [actions.CREATE_ACCOUNT_SUCCESS]: (state, { payload }) => ({
        success: true,
        isLoading: false,
        message: payload.response.message

    }),
    [actions.CREATE_ACCOUNT_FAIL]: (state, { payload }) => ({
        isLoading: false,
        success: false,
        errors: payload.response
    }),

}, defaultState)

export default CreateAccountPageReducer;