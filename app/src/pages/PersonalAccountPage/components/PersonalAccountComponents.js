import React from 'react'

import styles from './style.module.scss'

const AccountComponent = ({ orders }) => {
    return ( 
        <div>
            <div>Quantity of orders: {orders.length}</div>
            <div className={styles.wrapper}>{orders.map((order) => <div className={styles.wrapperOrder}>
                <p>Data: {(new Date(order.createdAt)).toDateString()}</p>
                <p>Quantity: {order.itemsList.length}</p>
                <p>Total price: {order.totalPrice}</p>
            </div>)}</div>
        </div>
     );
}
 
export default AccountComponent;