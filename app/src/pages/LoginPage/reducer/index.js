import { handleActions } from 'redux-actions'

import * as actions from './../actions/index'

const defaultState = {
    userInfo: {},
    isLoading: false,
    isAuth: false,
    accessToken: null,
    errors: null
}

const LoginPageReducer = handleActions({
    [actions.LOGIN_REQUEST]: (state) => ({
        ...state,
        isLoading: true
    }),
    [actions.LOGIN_SUCCESS]: (state, { payload }) => {
        const { accessToken, ...userInfo } = payload.response;

        localStorage.setItem('token', accessToken)

        return {
            isLoading: false,
            isAuth: true,
            userInfo,
        }
    },
    [actions.LOGIN_FAIL]: (state, { payload }) => ({
        isLoading: false,
        isAuth: false,
        errors: payload.response
    }),
    [actions.LOGOUT]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        isAuth: false,
    }),

}, defaultState)

export default LoginPageReducer;