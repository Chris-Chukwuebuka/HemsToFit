import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// imported bootstrap links below
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// imported App
import App from './App.jsx'
// imported BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
