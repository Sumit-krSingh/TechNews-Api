import React from 'react'
import { useGlobalContext } from './context'
import "../App.css";



const Pagenumber = () => {
  const {page,nbPages,getPrevPage,getNextPage} =useGlobalContext();
  return (
    <>
    <div className='paginationBox'>
      <button onClick={() =>getPrevPage()}>PREV</button>
      <p>{page +1} to {nbPages}</p>

      <button onClick={() => getNextPage()}>NEXT</button>
      
    </div>
    </>
  )
}

export default Pagenumber
