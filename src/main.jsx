import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDom.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)