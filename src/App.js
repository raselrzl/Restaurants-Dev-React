import React, { useState } from 'react'
import AppRouter from './Components/AppRouter'
import {AppContext} from './Contexts/Context'
import menuitemsList from "./data.json"


//console.log(menuitemsList)


function App() {
  const [menuitems]=useState(menuitemsList)
  
  return (
    <AppContext.Provider value={{menuitems}}>
      <AppRouter />
    </AppContext.Provider>
    
  )
}

export default App