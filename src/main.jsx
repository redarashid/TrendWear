import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TopHeader from './Components/TopHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopHeader/>
    <App />
  </StrictMode>,
)
