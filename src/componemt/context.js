import React from "react";
import { useContext } from 'react'


// create context

const AppContext = React.createContext();

// create the context provider
const AppProvider =({children}) => {
    return(
        <>
        <AppContext.Provider value = {"Sumit Full Stack developer"}>{children}</AppContext.Provider>
        </>
    )
};

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext} ;