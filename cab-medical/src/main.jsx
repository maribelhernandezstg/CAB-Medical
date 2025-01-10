import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/header.jsx'
import Principal from './Principal.jsx'
import Footer from './assets/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Principal />
    <Footer />
  </StrictMode>,
)
