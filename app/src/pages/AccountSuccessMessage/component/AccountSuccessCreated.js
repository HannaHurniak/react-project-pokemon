import React from 'react';


const AccountCreatedSuccess = ({ message, handleGoToLogin }) => {
    return ( 
        <div>
            <p>{message}</p>
            <button onClick={handleGoToLogin} >Go To Login</button>
        </div>
     );
}
 
export default AccountCreatedSuccess;