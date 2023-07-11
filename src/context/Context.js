import React from 'react'
import { createContext } from 'react'
const cart=createContext();
export const Context = ({children}) => {
  return (
    <cart.Provider>
        {children}
    </cart.Provider>
  )
}
