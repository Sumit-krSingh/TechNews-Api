import React from 'react'
import { useGlobalContext } from './context'
import "../App.css";


const Searchbar = () => {
  const {query, searchPost} =useGlobalContext();
  
  return (
    <>
    <div className="searchBox">
    
    <h1>Welcome to Tech News</h1>
  <form >
  <div>
    <input type="text"
     placeholder='Search Here'
    value={query}
    onChange={(e) => searchPost(e.target.value)} />
    </div>
  </form>
    </div>
    </>
    
  )
}

export default Searchbar
