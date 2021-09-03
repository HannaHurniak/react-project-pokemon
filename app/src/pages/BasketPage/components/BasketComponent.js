import React from 'react'

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
 
export default React.memo(BasketComponent);