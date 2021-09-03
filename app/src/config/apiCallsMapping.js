import * as LoginPage from '../pages/LoginPage/actions/index';
import * as LoginApi from '../pages/LoginPage/api/index';

import * as CreateAccountPage from '../pages/CreateAccountPage/actions/index';
import * as CreateAccountApi from '../pages/CreateAccountPage/api/index';

import * as PokemonsActions from './../pages/Pokemons/action/index';
import * as PokemonsApi from './../pages/Pokemons/api/index';

import * as PokemonDetailsActions from './../pages/PokemonsDetailsPage/action/index';
import * as PokemonsDetailsApi from './../pages/PokemonsDetailsPage/api/index';

import * as ProductsInBasketActions from './../commonComponents/Button/actions';
import * as ProductsInBasketApi from './../commonComponents/Button/api';

import * as BasketPageActions from './../pages/BasketPage/actions/index';
import * as BasketPageApi from './../pages/BasketPage/api/index';

import * as PersonalAccountActions from './../pages/PersonalAccountPage/actions/index';
import * as PersonalAccountApi from './../pages/PersonalAccountPage/api/index';


const apiCallMapping = (action) => {
    const mapping = {
        [LoginPage.LOGIN_REQUEST]: LoginApi.loginSignIn,
        [CreateAccountPage.CREATE_ACCOUNT_REQUEST]: CreateAccountApi.accountSignUp,
        [PokemonsActions.GET_POKEMONS_REQUEST]: PokemonsApi.getPokemons,
        [PokemonDetailsActions.GET_POKEMONS_DETAILS_REQUEST]: PokemonsDetailsApi.getPokemonDetails,
        [ProductsInBasketActions.ADD_CARD_TO_BASKET_REQUEST]: ProductsInBasketApi.addToBasket,
        [ProductsInBasketActions.GET_BASKET_PRODUCTS_REQUEST]: ProductsInBasketApi.getBasket,
        [BasketPageActions.POST_ORDER_REQUEST]: BasketPageApi.postOrder,
        [ProductsInBasketActions.CHANGE_QUANTITY_OF_PRODUCT_REQUEST]: ProductsInBasketApi.patchQuantityOfCard,
        [PersonalAccountActions.GET_COUNT_OF_ORDER_REQUEST]: PersonalAccountApi.getAllOrders,
    };

    if (!mapping[action.type]) {
        throw Error("Not mapped action");
    }

    return mapping[action.type];
}
 
export default apiCallMapping;