import React from 'react'
import styles from './styles.module.scss'

const CounterComponent = ({ card, handleIncrement, quantity, handleDecrement }) => {
    return ( 
        <div className={styles.wrapper}>
            <button onClick={handleDecrement}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncrement}>+</button>
        </div>  
     );
}
 
export default CounterComponent;