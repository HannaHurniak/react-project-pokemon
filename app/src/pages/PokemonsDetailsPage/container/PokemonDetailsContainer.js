import PokemonDetails from './../components/PokemonDetails'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'

import { GET_POKEMONS_DETAILS_REQUEST } from '../action/index'

const PokemonDetailsContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { pokemonsInfo, abilities, stats } = useSelector((state) => state.PokemonsDetailsPage)

    useEffect(() => {
        dispatch(GET_POKEMONS_DETAILS_REQUEST(id));
    }, [dispatch])

    return ( <PokemonDetails 
            pokemonsInfo={pokemonsInfo}
            abilities={abilities}
            stats={stats}
        /> );
}
 
export default PokemonDetailsContainer;