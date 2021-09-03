import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GET_BASKET_PRODUCTS_REQUEST, CHANGE_QUANTITY_OF_PRODUCT_REQUEST, CLEAN_BASKET_PRODUCTS } from './../../../commonComponents/Button/actions'
import { POST_ORDER_REQUEST, CLEAN_ORDER } from './../actions/index'

import BasketComponent from './../components/BasketComponent'

const BasketContainer = () => {
    const dispatch = useDispatch();

    const { basket } = useSelector((state) => state.ProductsInBasket)
    const { itemsList } = useSelector((state) => state.ProductsInBasket)
    const { createdAt } = useSelector((state) => state.PostOrder)
    
    const [quantityOfProduct, setQuantityOfProduct] = useState([])

    useEffect(() => {
        const updateQuantityOfProduct = itemsList.map((item) => {
            return {id: item.id, quantity: item.quantity,}
        });
        setQuantityOfProduct([...updateQuantityOfProduct])
    }, [itemsList])

    const order = useMemo(() => {
        return{
            customerId: `${basket.customerId}`,
            totalPrice: parseInt(`${basket.totalPrice}`),
            itemsList: itemsList,
        }
    },[basket])

    const handleIncrement = useCallback((index) => {
        const quantityOfProductCopy = [...quantityOfProduct];
        const updateCard = quantityOfProductCopy[index];
        updateCard.quantity = updateCard.quantity + 1;
        setQuantityOfProduct(quantityOfProductCopy)

        dispatch(CHANGE_QUANTITY_OF_PRODUCT_REQUEST(updateCard))
    }, [quantityOfProduct])

    const handleDecrement = useCallback((index) => {
        if (quantityOfProduct[index].quantity > 1) {
            const quantityOfProductCopy = [...quantityOfProduct];
            const updateCard = quantityOfProductCopy[index];
            updateCard.quantity = updateCard.quantity - 1;
            setQuantityOfProduct(quantityOfProductCopy)

            dispatch(CHANGE_QUANTITY_OF_PRODUCT_REQUEST(updateCard))
        }
    }, [quantityOfProduct])

    useEffect(() => {
        dispatch(GET_BASKET_PRODUCTS_REQUEST())
    }, [dispatch])

    // useEffect(() => {
    // //     dispatch(CLEAN_ORDER())
    //     dispatch(CLEAN_BASKET_PRODUCTS());
    // }, [dispatch, createdAt])
    
    const handleCreateOrder = useCallback(() => {
        dispatch(POST_ORDER_REQUEST(order))
    }, [dispatch])

    return ( 
        <BasketComponent 
            basket={basket}
            itemsList={itemsList}
            handleCreateOrder={handleCreateOrder}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            createdAt={createdAt}
        />
     );
}
 
export default React.memo(BasketContainer);