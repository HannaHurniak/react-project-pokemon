import React from 'react';
import { Box, withStyles, Button, MenuItem, TextField } from '@material-ui/core';

import LoginInputComponent from '../../../commonComponents/LoginInput/LoginInputComponent'
import styles from './styles'


const CreateAccountLayout = ({ currencies, classes, formValues, handleSubmit, 
    handleChange, isSubmitAvailable, errors, success, message, handleGoToLogin }) => {
    return ( 
        // <div>{success === false ? <div>
        //     <Box className={classes.wrapper}>
        //      <form onSubmit={handleSubmit}>
        //          <Box>
        //              <LoginInputComponent
        //                 label={'Email'}
        //                 type='email'
        //                 name='email'
        //                 handleChange={handleChange}
        //             />
        //         </Box>
        //         <Box>
        //             <LoginInputComponent
        //                 label={'First Name'}
        //                 type='text'
        //                 name='firstName'
        //                 handleChange={handleChange}
        //             />
        //         </Box>
        //         <Box>
        //             <LoginInputComponent
        //                 label={'Last Name'}
        //                 type='text'
        //                 name='lastName'
        //                 handleChange={handleChange}
        //             />
        //         </Box>
        //         <Box>
        //             <TextField
        //                 select
        //                 name='gender'
        //                 label="Your gender"
        //                 value={formValues.gender}
        //                 onChange={handleChange}
        //                 helperText="Please select your gender"
        //                 >
        //                 {currencies.map((option) => (
        //                     <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                     </MenuItem>
        //                 ))}
        //             </TextField> 
        //         </Box>
        //         <Box>
        //             <LoginInputComponent 
        //                 label={'Password'}
        //                 type='password'
        //                 name='password'
        //                 handleChange={handleChange}
        //             />  
        //         </Box>
        //         <Box>
        //             <LoginInputComponent 
        //                 label={'Phone'}
        //                 type='phone'
        //                 name='phone'
        //                 handleChange={handleChange}
        //             />  
        //         </Box>
        //         <Button type='submit' variant='outlined'
        //             disabled={isSubmitAvailable} >Create account</Button>
        //     </form>
        // </Box> 
        // </div> : <div>{message}<button onClick={handleGoToLogin}>To Go Login</button></div>}</div>
        <Box className={classes.wrapper}>
            <form onSubmit={handleSubmit}>
                <Box>
                    <LoginInputComponent
                        label={'Email'}
                        type='email'
                        name='email'
                        handleChange={handleChange}
                    />
                </Box>
                <Box>
                    <LoginInputComponent
                        label={'First Name'}
                        type='text'
                        name='firstName'
                        handleChange={handleChange}
                    />
                </Box>
                <Box>
                    <LoginInputComponent
                        label={'Last Name'}
                        type='text'
                        name='lastName'
                        handleChange={handleChange}
                    />
                </Box>
                <Box>
                    <TextField
                        select
                        name='gender'
                        label="Your gender"
                        value={formValues.gender}
                        onChange={handleChange}
                        helperText="Please select your gender"
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField> 
                </Box>
                <Box>
                    <LoginInputComponent 
                        label={'Password'}
                        type='password'
                        name='password'
                        handleChange={handleChange}
                    />  
                </Box>
                <Box>
                    <LoginInputComponent 
                        label={'Phone'}
                        type='phone'
                        name='phone'
                        handleChange={handleChange}
                    />  
                </Box>
                <Button type='submit' variant='outlined'
                    disabled={isSubmitAvailable} >Create account</Button>
            </form>
            {/* <div>{errors}</div>
            <div>{success === true ? <div>{message}<button onClick={handleGoToLogin}>To Go Login</button></div> : '' }</div> */}
        </Box> 
     );
}
 
export default withStyles(styles)(CreateAccountLayout);