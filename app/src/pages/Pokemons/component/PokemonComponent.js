import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

import PokemonCard from './../../../commonComponents/PokemonCard/PokemonCard'
import Pagination from './../../../commonComponents/Pagination/Pagination'

const PokemonComponent = ({ pokemons, handleGoToPokemonDetails, 
   handleChangePage}) => {
    return ( 
        <div>
            <div className={styles.wrapper}>
               {pokemons.map((pokemon) => (<PokemonCard key={pokemon.name} 
               image={pokemon.image} title={pokemon.name}
               name={pokemon.name} price={pokemon.price} handleGoToPokemonDetails={() => handleGoToPokemonDetails(pokemon.id)}
               />))}
            </div>
            <div className={styles.paginationWrapper}><div className={styles.pagination}><Pagination countPage={38} onPageChange={handleChangePage}/></div></div>
         </div>
     );
}

PokemonComponent.propTypes = {
   pokemons: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string,
         image: PropTypes.string,
         price: PropTypes.number,
      })
   ),
   handleGoToPokemonDetails: PropTypes.func,
   handleChangePage: PropTypes.func,
}
 
export default PokemonComponent;