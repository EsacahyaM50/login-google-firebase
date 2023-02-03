import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home/:email' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
