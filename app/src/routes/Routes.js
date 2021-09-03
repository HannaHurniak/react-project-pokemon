import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ROUTES from './RouteNames';

import LoginContainer from './../pages/LoginPage/container/LoginPageContainer';
import CreateAccount from './../pages/CreateAccountPage/container/CreateAccountContainer'
import AccountSuccessContainer from './../pages/AccountSuccessMessage/container/AccountCreatedSuccessContainer'
import PokemonsContainer from './../pages/Pokemons/container/PokemonContainer'
import PokemonDetailsContainer from './../pages/PokemonsDetailsPage/container/PokemonDetailsContainer'
import PersonalAccountContainer from './../pages/PersonalAccountPage/container/PersonalAccountContainer'
import BasketContainer from './../pages/BasketPage/container/BasketContainer';

import PrivateRoute from './PrivateRoute'

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.LOGIN_PAGE} component={LoginContainer}/>
            <Route path={ROUTES.CREATE_ACCOUNT_PAGE} component={CreateAccount}/>
            <Route path={ROUTES.ACCOUNT_CREATED_SUCCESS} component={AccountSuccessContainer}/>
            <PrivateRoute exact path={ROUTES.POKEMONS_PAGE} component={PokemonsContainer}/>
            <PrivateRoute path={ROUTES.POKEMONS_DETAILS_PAGE} component={PokemonDetailsContainer}/>
            <PrivateRoute path={ROUTES.PERSONAL_ACCOUNT_PAGE} component={PersonalAccountContainer}/>
            <PrivateRoute path={ROUTES.BASKET_PAGE} component={BasketContainer}/>
        </Switch>
    );
};

export default Routes;