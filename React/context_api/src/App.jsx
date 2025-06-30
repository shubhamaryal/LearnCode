import React from 'react'
import { createContext } from 'react'
import ChildA from './components/ChildA'

// Step 1: Create a context
const UserContext = createContext()
// Step 2: Wrap all child inside a provider
// Step 3: Pass the value 
// Step 4: Consure the value in the Consumer

const user = 'shubhammmmm'

const App = () => {
  return (
    <UserContext.Provider value= {user}>
      <ChildA />
    </UserContext.Provider>
  )
}

export default App
export {UserContext}