import React from 'react';
import Header from './../Header/container/HeaderContainer'


const MainComponent = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{ children }</div>
        </div>  
    )
}

export default MainComponent;