import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Toaster position="top-center" />
    <App />
    </BrowserRouter>
 
)
