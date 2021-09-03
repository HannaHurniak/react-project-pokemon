import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { IconButton, Badge } from '@material-ui/core';
// import StyledBadge from '@material-ui/icons/StyledBadge';


import config from '../../../config/config';
import styles from './styles.module.scss'

const HeaderComponent = ({ isAuth, quantity, handelLogout, handleGoToBasket }) => {
    return (
        <div  className={styles.header}>
            <div className={styles.wrapper}>
                { isAuth ? <div className={styles.divButton}> {config.map(({title, path}) => (
                    <Link to={path} key={path}>
                        <button>{title}</button>
                    </Link>))} 
                    <button onClick={handelLogout}>Logout</button>
                </div> : <div></div> }

            <div>
                { isAuth ? <IconButton aria-label="cart" onClick={handleGoToBasket}>
                    <Badge badgeContent={quantity} color="secondary">
                        <ShoppingBasketIcon />
                    </Badge>
                </IconButton> : <div></div> }
            </div>
            </div>
        </div>
    );
};

export default HeaderComponent;