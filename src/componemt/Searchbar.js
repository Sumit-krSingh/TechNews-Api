import React from 'react'
import { useGlobalContext } from './context'

const Searchbar = () => {
  const Update = useGlobalContext();
  return (
    <div>
      navigation bar {Update}
    </div>
  )
}

export default Searchbar
