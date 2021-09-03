import { handleActions } from 'redux-actions'

import * as actions from './../action/index'

const defaultState = {
    pokemonsInfo: [],
    isLoading: false,
    errors: null,
    currentPage: 1,
}

const pokemonsPageReducer = handleActions({
    [actions.GET_POKEMONS_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.GET_POKEMONS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        pokemonsInfo: payload.response,
    }),
    [actions.GET_POKEMONS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload,
    }),
    [actions.CHANGE_PAGE]: (state, { payload }) => ({
        ...state, 
        currentPage: payload
    })
}, defaultState)

export default pokemonsPageReducer;