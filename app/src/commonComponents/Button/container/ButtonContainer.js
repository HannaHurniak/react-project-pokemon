import { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ButtonToBasket from './../components/ButtonAddToBasket'
import { ADD_CARD_TO_BASKET_REQUEST } from './../actions/index'

const ButtonContainer = () => {
    const dispatch = useDispatch();
    const { pokemonsInfo } = useSelector((state) => state.PokemonsDetailsPage)

    const detailsCardInfo = useMemo(() => {
        return{
            id: parseInt(`${pokemonsInfo.id}`),
            name: `${pokemonsInfo.name}`,
            image: `${pokemonsInfo.image}`,
            quantity: 1,
            price: parseInt(`${pokemonsInfo.price}`),
        }
    },[pokemonsInfo])
   
    const handleAddItem = useCallback(() => {
        dispatch(ADD_CARD_TO_BASKET_REQUEST(detailsCardInfo))
    }, [dispatch, pokemonsInfo])

    return ( 
        <ButtonToBasket handleAddItem={handleAddItem}/>
     );
}
 
export default ButtonContainer;