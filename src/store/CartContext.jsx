"use client"

import { createContext, useState } from "react"

export const CartCtx = createContext({
  Cart: 0,
  setCart: () => {},
})

export function CartProvider({ children }) {
  const [Cart, setCart] = useState(3) // Default to 3 items for demo

  return <CartCtx.Provider value={{ Cart, setCart }}>{children}</CartCtx.Provider>
}
