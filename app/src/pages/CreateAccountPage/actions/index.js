import { createAction } from 'redux-actions'

export const CREATE_ACCOUNT_REQUEST = createAction('CREATE_ACCOUNT_REQUEST');
export const CREATE_ACCOUNT_SUCCESS = createAction('CREATE_ACCOUNT_SUCCESS')
export const CREATE_ACCOUNT_FAIL = createAction('CREATE_ACCOUNT_FAIL')