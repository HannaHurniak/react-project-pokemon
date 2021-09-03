import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

import CardInBasketComponent from './CardInBasket'

const BasketComponent = ({ basket, itemsList, handleCreateOrder, handleIncrement, handleDecrement, createdAt }) => {
    return ( 
        <div>
            { createdAt ?  <div className={styles.orderCreated}>Your order has been successfully created</div> : itemsList.length === 0 ? 
                <div className={styles.orderCreated}>Your basket is empty</div> : <div><div>{itemsList.map((card, index) => <div key={card.name}>
                <CardInBasketComponent card={card} handleIncrement={() => handleIncrement(index)} quantity={card.quantity} 
                handleDecrement={() => handleDecrement(index)}/>
                </div>)}
                </div>
                <div className={styles.totalPrice}>TOTAL PRICE: {basket.totalPrice}</div>
                <div className={styles.wrapperButton}>
                    <button className={styles.buttonForOrder} onClick={handleCreateOrder}>Confirm the order</button>
                </div></div>
            }
        </div>
     );
}

BasketComponent.propTypes = {
    basket: PropTypes.shape({
        totalPrice: PropTypes.number,
        quantity: PropTypes.number,
        itemsList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                image: PropTypes.string,
                quantity: PropTypes.number,
                price: PropTypes.number,
            })
        )
    }),
    itemsList: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number,
    }),
    handleCreateOrder: PropTypes.func,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    createdAt: PropTypes.string,
}
 
export default React.memo(BasketComponent);