import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { LOGOUT } from './../../LoginPage/actions/index'
import ROUTES from './../../../routes/RouteNames'

import HeaderComponent from './../components/HeaderComponents'

const HeaderContainer = () => {
    const {isAuth} = useSelector((state) => state.LoginPage);
    const {quantity} = useSelector((state) => state.ProductsInBasket.basket);

    const dispatch = useDispatch();
    const history = useHistory();

    const handelLogout = useCallback(() => {
        dispatch(LOGOUT())
    }, [])

    const handleGoToBasket = useCallback(() => {
        history.push(ROUTES.BASKET_PAGE);
    }, [])

    return ( <HeaderComponent 
        isAuth={isAuth} 
        quantity={quantity}
        handelLogout={handelLogout}
        handleGoToBasket={handleGoToBasket}
    /> );
}
 
export default HeaderContainer;