import { handleActions } from 'redux-actions'

import * as actions from './../action/index'

const defaultState = {
    pokemonsInfo: {},
    abilities: [],
    stats: [],
    isLoading: false,
    errors: null,
}

const pokemonsDetailsPageReducer = handleActions({
    [actions.GET_POKEMONS_DETAILS_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.GET_POKEMONS_DETAILS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        pokemonsInfo: payload.response,
        abilities: payload.response.abilities,
        stats: payload.response.stats,
    }),
    [actions.GET_POKEMONS_DETAILS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload.response,
    }),
}, defaultState)

export default pokemonsDetailsPageReducer;