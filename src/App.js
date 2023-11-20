import React from 'react'
import Searchbar from './componemt/Searchbar'
import Pagenumber from './componemt/Pagenumber'
import Dailyupdate from './componemt/Dailyupdate'
// import { useContext } from 'react'
// import { AppContext } from './componemt/context'
import { useGlobalContext } from './componemt/context'
const App = () => {
  const data = useGlobalContext();
  return (<>
    <div>
      Welcome to {data}
    </div>
  <Searchbar />
  <Pagenumber />
  <Dailyupdate />
  
    </>
  )
}

export default App
