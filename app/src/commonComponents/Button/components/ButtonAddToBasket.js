import React from 'react';
// import { Button } from '@material-ui/core'
import styles from './style.module.scss'

const ButtonToBasket = ({ handleAddItem }) => {
    return (
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={handleAddItem}>BUY</button>
            {/* <Button size="small" color="primary" variant='outlined' onClick={handleAddItem}>
              Buy
            </Button> */}
        </div>
        
     );
}
 
export default ButtonToBasket;