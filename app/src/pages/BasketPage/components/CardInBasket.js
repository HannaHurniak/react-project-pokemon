import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'
import CounterOfQuantity from './../../../commonComponents/CounterOfQuantity/components/CounterComponent'

const CardInBasketComponent = ({ card, handleIncrement, quantity, handleDecrement }) => {
    return ( <div className={styles.wrapper}>
        <div><img src={card.image} alt={'pokemon'}></img></div>
        <div className={styles.divName}>{card.name}</div>
        <div>{card.price}</div>
        <div><CounterOfQuantity card={card} handleIncrement={handleIncrement} quantity={quantity} handleDecrement={handleDecrement}/></div>
        <div>{card.price * quantity}</div>
    </div> );
}
 
CardInBasketComponent.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number,
    }),
    quantity: PropTypes.number,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
}

export default React.memo(CardInBasketComponent);