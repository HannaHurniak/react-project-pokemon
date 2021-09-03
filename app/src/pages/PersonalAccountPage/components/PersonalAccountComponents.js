import React from 'react'
import PropTypes from 'prop-types'

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

AccountComponent.propTypes = {
    orders:  PropTypes.arrayOf(
        PropTypes.shape({
            totalPrice: PropTypes.number,
            createAt: PropTypes.string,
            itemsList: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    image: PropTypes.string,
                    quantity: PropTypes.number,
                    price: PropTypes.number,
                })
            )
        })
    ),
}

export default AccountComponent;