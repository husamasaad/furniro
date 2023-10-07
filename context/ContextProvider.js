'use client'
import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext() ;



export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeFavList, setActiveFavList] = useState(false);
  
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        activeCart,
        activeProfile,
        activeFavList,
        setActiveMenu,
        setActiveCart,
        setActiveProfile,
        setActiveFavList
      }}
    >
      {children}
    </StateContext.Provider>
  )
}


export const useStateContext = () => useContext(StateContext)