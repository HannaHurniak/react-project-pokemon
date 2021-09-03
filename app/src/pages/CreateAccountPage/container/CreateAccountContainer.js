import { useForm } from '../../../hooks/index'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import ROUTES from './../../../routes/RouteNames'

import CreateAccountLayout from '../component/CreateAccountLayout';
import { CREATE_ACCOUNT_REQUEST } from './../actions/index'


const CreateAccountContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { errors, success, message } = useSelector((state) => state.CreateAccountPage)
    
    const [formValues, handleChange] = useForm({
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        password: '',
        phone: '',
    });

    const handleSubmit = useCallback((event) => {
          event.preventDefault();
          dispatch(CREATE_ACCOUNT_REQUEST(formValues))
    }, [dispatch, formValues])

    const isSubmitAvailable = useMemo(() => {
        const values = Object.values(formValues);
        return values.findIndex((value) => value === '') !== -1;
    }, [formValues])

    const currencies = [
        {
          value: 'male',
          label: 'male',
        },
        {
          value: 'female',
          label: 'female',
        },
      ];
      
    const handleGoToLogin = useCallback((event) => {
        event.preventDefault();
        history.push(ROUTES.LOGIN_PAGE)
    }, [])

    useEffect(() => {
      if (success) {
        history.push(ROUTES.ACCOUNT_CREATED_SUCCESS)
      }
    }, [success])

    return ( <CreateAccountLayout currencies={currencies}
        formValues={formValues} handleSubmit={handleSubmit}
        handleChange={handleChange} isSubmitAvailable={isSubmitAvailable}  
        errors={errors} success={success} message={message}
        handleGoToLogin={handleGoToLogin}
        /> );
}
export default CreateAccountContainer;