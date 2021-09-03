import PokemonComponent from './../component/PokemonComponent'
import React, { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import ROUTES from './../../../routes/RouteNames'

import { GET_POKEMONS_REQUEST, CHANGE_PAGE } from './../action/index'

import { GET_BASKET_PRODUCTS_REQUEST } from './../../../commonComponents/Button/actions/index'

const PokemonContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { pokemonsInfo, currentPage } = useSelector((state) => state.PokemonPage)

    useEffect(() => {
        dispatch(GET_POKEMONS_REQUEST(currentPage))
    }, [dispatch, currentPage])

    useEffect(() => {
        dispatch(GET_BASKET_PRODUCTS_REQUEST())
    }, [dispatch])

    const handleGoToPokemonDetails = useCallback((id) => {
        history.push(`${ROUTES.POKEMONS_PAGE}/${id}`)
    }, [])

    const handleChangePage = useCallback((event, page) => {
        dispatch(CHANGE_PAGE(page));
    }, [currentPage])

    // const handleBasket = useCallback((index) => {
    //     const quantityOfProductCopy = [...quantityOfProduct];
    //     const updateCard = quantityOfProductCopy[index];
    //     updateCard.quantity = updateCard.quantity + 1;
    //     setQuantityOfProduct(quantityOfProductCopy)

    //     dispatch(CHANGE_QUANTITY_OF_PRODUCT_REQUEST(updateCard))
    // }, [quantityOfProduct])

    return ( <PokemonComponent pokemons={pokemonsInfo}
        handleGoToPokemonDetails={handleGoToPokemonDetails}
        handleChangePage={handleChangePage}
    /> );
}
 
export default PokemonContainer;