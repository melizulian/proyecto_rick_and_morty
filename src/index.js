import React from 'react'
// import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createRoot } from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'

createRoot(
  document.getElementById('root')
).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </BrowserRouter>
  ,
)
