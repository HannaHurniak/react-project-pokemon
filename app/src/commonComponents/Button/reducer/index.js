import { handleActions } from 'redux-actions'

import * as actions from '../actions/index'

const defaultState = {
    basket: {},
    itemsList: [],
    isLoading: false,
    message: null,
    error: null,
}

const productsInBasket = handleActions({
    [actions.ADD_CARD_TO_BASKET_REQUEST]: (state, {payload}) => ({
        ...state,
        isLoading: true,
    }),
    [actions.ADD_CARD_TO_BASKET_SUCCESS]: (state, {payload}) => ({
        ...state,
        isLoading: false,
        basket: payload.response,
        itemsList: payload.response.itemsList,
    }),
    [actions.ADD_CARD_TO_BASKET_FAIL]: (state, {payload}) => ({
        ...state,
        isLoading: false,
        message: payload.response,
    }),

    [actions.GET_BASKET_PRODUCTS_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.GET_BASKET_PRODUCTS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        basket: payload.response,
        itemsList: payload.response.itemsList,
    }),
    [actions.GET_BASKET_PRODUCTS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload.response,
    }),

    [actions.CLEAN_BASKET_PRODUCTS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        basket: {},
        itemsList: [],
    }),

    [actions.CHANGE_QUANTITY_OF_PRODUCT_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.CHANGE_QUANTITY_OF_PRODUCT_SUCCESS]: (state, { payload }) => ({
        ...state,
        basket: payload.response.cartState,
        // itemsList: payload.response.updatedItem,
        isLoading: false,
    }),
    [actions.CHANGE_QUANTITY_OF_PRODUCT_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        message: payload.response.message,
    }),

}, defaultState)

export default productsInBasket;