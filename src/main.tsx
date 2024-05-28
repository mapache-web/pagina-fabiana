import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"


//* SE RENDERIZA EN DIV RAÍZ LA APP DE REACT CON ROUTER

ReactDOM.createRoot(document.getElementById('raiz')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
