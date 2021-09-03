import { createAction } from 'redux-actions'

export const POST_ORDER_REQUEST = createAction('POST_ORDER_REQUEST');
export const POST_ORDER_SUCCESS = createAction('POST_ORDER_SUCCESS')
export const POST_ORDER_FAIL = createAction('POST_ORDER_FAIL')

export const CLEAN_ORDER = createAction('CLEAN_ORDER')

