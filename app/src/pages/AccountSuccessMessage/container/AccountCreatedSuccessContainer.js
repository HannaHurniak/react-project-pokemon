import AccountCreatedSuccess from './../component/AccountSuccessCreated'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useCallback } from 'react'

import ROUTES from './../../../routes/RouteNames'

const AccountCreatedSuccessContainer = () => {
    const { message } = useSelector((state) => state.CreateAccountPage)
    const history = useHistory();

    const handleGoToLogin = useCallback((event) => {
        event.preventDefault();
        history.push(ROUTES.LOGIN_PAGE)
    }, [])

    return ( <AccountCreatedSuccess message={message}
        handleGoToLogin={handleGoToLogin}
    /> );
}
 
export default AccountCreatedSuccessContainer;