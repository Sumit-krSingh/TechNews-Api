import React from "react";
import { useContext, useReducer, useEffect } from 'react'
import reducer from "./reducer";

let API ="http://hn.algolia.com/api/v1/search?";
// define initialState

const initialState ={
    isLoading:true,
    query:"story",
    nbpages:0,
    hitsPerPage:0,
    hits:[],
};


// create context

const AppContext = React.createContext();

// create the context provider
const AppProvider =({children}) => {

    const [state, dispatch] = useReducer(reducer,initialState)

    const ApiData = async (url) => {
        dispatch({type: "GET_LOADING"});
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
            payload: {
                hits: data.hits,
                nbpages: data.nbpages
            },
        });

        } catch (error) {
            console.log("error")

        }
    }
    // to removePost use Dispatch and action in reducer
    const removePost = (post_ID) =>{
        dispatch({
            type: "REMOVE_POST",
        payload :post_ID})
    }

    useEffect(() => {
        ApiData(`${API}query=${state.query}&page=${state.hitsPerPage}`);

    },[]);
    return(
        <>
        <AppContext.Provider value = {{...state, removePost}}>{children}</AppContext.Provider>
        </>
    )
};

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext} ;