import React, { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { GET_COUNT_OF_ORDER_REQUEST } from './../actions/index'

import AccountComponent from '../components/PersonalAccountComponents'

const PersonalAccountContainer = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.PersonalAccountPage)
    
    useEffect(() => {
        dispatch(GET_COUNT_OF_ORDER_REQUEST())
    }, [dispatch])

    return ( <AccountComponent 
        orders={orders}
    /> );
}
 
export default PersonalAccountContainer;