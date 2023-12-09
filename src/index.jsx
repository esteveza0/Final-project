import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App'
import Agents from './Agents'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Agents />
    <App />
  </React.StrictMode>
)