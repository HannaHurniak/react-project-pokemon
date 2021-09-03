import api from './../../../api/config'

export const addToBasket = (body) => api.post("/cart/item", body);

export const getBasket = () => api.get('/cart');

export const patchQuantityOfCard = (body) => api.patch('/cart/item', body);
