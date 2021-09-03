import api from './../../../api/config'

export const postOrder = (body) => api.post('/order', body);