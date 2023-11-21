import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

const Dailyupdate = () => {

    const {hits, isLoading} = useGlobalContext();

   

    if(isLoading){
        return(<>
            <h2>Loading......</h2>
        </>
        );
    }
    return (
        <>
            <h2>Technical daily news</h2>

            {hits.map((curPost)=>{
                return <h2>{curPost.title}</h2>

            })}
        </>
    )
}

export default Dailyupdate
