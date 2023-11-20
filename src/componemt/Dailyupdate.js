import React, { useEffect } from 'react'

const Dailyupdate = () => {
    let Api = "http://hn.algolia.com/api/v1/search?query=react";

    const ApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.log("error")

        }
    }

    useEffect(() => {
        ApiData(Api)

    }, []);
    return (
        <>
            <h2>Technical daily news</h2>
        </>
    )
}

export default Dailyupdate
