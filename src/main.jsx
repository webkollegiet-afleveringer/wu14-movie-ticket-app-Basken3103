import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "./style/main.scss"

ReactDom.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)