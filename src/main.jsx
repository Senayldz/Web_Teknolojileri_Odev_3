import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //id'si verilen adresi alır
  //strick mode güvenlik ayarlarına bakar.
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
