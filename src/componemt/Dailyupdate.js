import React from 'react'
import { useGlobalContext } from './context'
import "../App.css";

const Dailyupdate = () => {

    const { hits, isLoading , removePost} = useGlobalContext();



    if (isLoading) {
        return (<>
            <h2>Loading......</h2>
        </>
        );
    }
    return (
        <>
            <div className="updateBox">
                {/* <h2>Technical daily news</h2> */}

                {hits.map((curPost) => {
                    const { title, author, url, num_comments, objectID } = curPost;
                    return (
                        <>
                            <div className="card" key ={objectID}>
                                <h2>{title}</h2>
                                <p>
                                    By <span>{author}</span> |
                                    <span> {num_comments} </span> comment
                                </p>
                                <div className="card-button">
                                    <a href={url} target='_blank'>Read More</a>
                                    <a id="remove" href="#" onClick={() => removePost(objectID)}>Remove</a>
                                </div>
                            </div>
                        </>
                    )

                })}
            </div>
        </>
    )
}

export default Dailyupdate
