import { TextField, withStyles } from '@material-ui/core';

import styles from './styles'

const LoginInputComponent = ({ value, handleChange, label, type, name, classes}) => {
    return ( 
        <TextField
            className={classes.input}
            value={value}
            label={label}
            onChange={handleChange}
            type={type}
            name={name}
        />
     );
}
 
export default withStyles(styles)(LoginInputComponent);