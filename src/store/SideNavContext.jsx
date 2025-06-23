"use client"

import { createContext, useState } from "react"

export const SideNavCtx = createContext({
  sideNavHidden: true,
  setSideNavHidden: () => {},
})

export function SideNavProvider({ children }) {
  const [sideNavHidden, setSideNavHidden] = useState(true)

  return <SideNavCtx.Provider value={{ sideNavHidden, setSideNavHidden }}>{children}</SideNavCtx.Provider>
}
