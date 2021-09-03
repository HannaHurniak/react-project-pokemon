import React from 'react'
import PropTypes from 'prop-types'

import { v4 as uuidv4 } from 'uuid';

import ButtonToBasket from '../../../commonComponents/Button/container/ButtonContainer'
import styles from './styles.module.scss'

const PokemonDetails = ({ pokemonsInfo, abilities, stats }) => {
    return ( 
        <div className={styles.wrapper}>
            <div>
                <div><h3>{pokemonsInfo.name}</h3></div>
                <img src={pokemonsInfo.image} alt={'pokemon'}></img>
                <div>{stats.map((stat) => <div key={uuidv4()}>{stat.title}: 
                    <div className={styles.stat}><div style={{ width: `${stat.value}px`, backgroundColor: "cadetblue"}}>{stat.value}</div></div></div> )}
                </div>
            </div>
            <div className={styles.detailsInfo}>
                
                <div className={styles.abilities}>
                    <p>Abilities</p>
                    {abilities.map((ability) => <div key ={uuidv4()}><div className={styles.abilitiesTitle}>{ability.title}</div> <div>{ability.description}</div></div>)}
                </div>
                
                <div className={styles.price}>Price: {pokemonsInfo.price}</div>
                <ButtonToBasket />
            </div>
        </div>
        
     );
}

PokemonDetails.propTypes = {
    pokemons: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        abilities: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
            })
        ),
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                value: PropTypes.number,
        })),
    }),
    abilities: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
        })
    ),
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.number,
    })),
}
 
export default PokemonDetails;