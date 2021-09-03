import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import storage from 'redux-persist/lib/storage'


import LoginPage from './../pages/LoginPage/reducer/index'
import CreateAccountPage from './../pages/CreateAccountPage/reducer/index'
import PokemonPage from './../pages/Pokemons/reducer/index'
import PokemonsDetailsPage from './../pages/PokemonsDetailsPage/reducer/index'
import ProductsInBasket from './../commonComponents/Button/reducer/index'
import PostOrder from './../pages/BasketPage/reducer/index'
import PersonalAccountPage from './../pages/PersonalAccountPage/reducer/index'

const loginBlackListedFields = createBlacklistFilter('LoginPage', ['isLoading', 'errors'])
// const detailsPokemonBlackListedFields = createBlacklistFilter('PokemonsDetailsPage', ['isLoading', 'errors'])
// const AddCardBlackListedFields = createBlacklistFilter('AddCardToBasket', ['isLoading', 'message'])
// const BasketsProductsBlackListedFields = createBlacklistFilter('GetProductsFromBasket', ['isLoading', 'error'])

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['LoginPage'],
    transforms: [loginBlackListedFields],
}

const rootReducer = combineReducers({ LoginPage, CreateAccountPage, PokemonPage, PokemonsDetailsPage, PostOrder, ProductsInBasket, PersonalAccountPage });

export default persistReducer(persistConfig, rootReducer);