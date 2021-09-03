import React from 'react';
import PropTypes from 'prop-types'
import LoginInputComponent from '../../../commonComponents/LoginInput/LoginInputComponent'
import { Box, withStyles, Button } from '@material-ui/core';

import styles from './styles'

import logo from './../../../assets/picture/pokemons-logo.jpg'

const LoginPageLayout = ({ classes, loginData, handleChange, handleSubmit, 
    errors, handleCreateAccount }) => {
    return ( 
        <div>
            <div className={classes.logo}><img src={logo} alt={logo}></img></div>
            <Box className={classes.wrapper}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Box>
                    <LoginInputComponent
                        value={loginData.email}
                        handleChange={handleChange}
                        label={'Email'}
                        type='email'
                        name='email'
                    />
                </Box>
                <Box>
                    <LoginInputComponent 
                        value={loginData.password}
                        handleChange={handleChange}
                        label={'Password'}
                        type='password'
                        name='password'
                    />  
                </Box>
                <Button type='submit' variant='outlined' className={classes.login}>Login</Button>
                </form>
                <div>{errors}</div>
                <Button variant="contained" color="secondary" 
                    onClick={handleCreateAccount} className={classes.create}>
                        Create account
                </Button>
            </Box>
        </div>
        
     );
}

LoginPageLayout.propTypes = {
    loginData: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleCreateAccount: PropTypes.func,
    errors: PropTypes.string,
}

export default withStyles(styles)(LoginPageLayout);