import LoginPageLayout from '../components/LoginPageLayout';
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { LOGIN_REQUEST } from './../actions/index'

import { useForm } from './../../../hooks/index'

import ROUTES from './../../../routes/RouteNames'

const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { isAuth, errors } = useSelector((state) => state.LoginPage)

    const [formValues, handleChange] = useForm({
        email: '',
        password: '',
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(LOGIN_REQUEST(formValues))
    }, [dispatch, formValues])

    const handleCreateAccount = useCallback((event) => {
        event.preventDefault();
        history.push(ROUTES.CREATE_ACCOUNT_PAGE)
    }, [])

    useEffect(() => {
        if (isAuth) {
            history.push(ROUTES.POKEMONS_PAGE)
        }
    }, [isAuth])

    return ( <LoginPageLayout 
        loginData={formValues} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        handleCreateAccount={handleCreateAccount}
        /> );
}
export default LoginContainer;