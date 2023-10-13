'use client'
import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext() ;



export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [activeFavList, setActiveFavList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)

  const [cartList, setCartList] = useState([])
  const [likesList, setLikesList] = useState([])
  
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        activeCart,
        activeFavList,
        setActiveMenu,
        setActiveCart,
        setActiveFavList,
        currentPage,
        setCurrentPage,
        cartList,
        setCartList,
        likesList,
        setLikesList
      }}
    >
      {children}
    </StateContext.Provider>
  )
}


export const useStateContext = () => useContext(StateContext)