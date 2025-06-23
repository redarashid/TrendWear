"use client"

import { createContext, useState } from "react"

export const AuthContext = createContext({
  isLoggedIn: false,
  userEmail: "",
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  const login = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserEmail("")
  }

  return <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>{children}</AuthContext.Provider>
}
