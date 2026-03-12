import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Details from "./pages/Details"
import Seats from "./pages/Seats"

function App() {

  return (
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/explore' element={<Explore />} />
     <Route path='/details' element={<Details />} />
     <Route path='/seats' element={<Seats />} />

    </Routes>
  )
}

export default App