import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Details from "./pages/Details"
import Seats from "./pages/Seats"
import Checkout from "./pages/Checkout"
import Payment from "./pages/Payment"
import Ticket from "./pages/Ticket"
import Download from "./pages/Download"
import SavedPlan from "./pages/SavedPlan"
import Settings from "./pages/Settings"
import SeatsComp from "./components/SeatsComp"


function App() {

  return (
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/explore' element={<Explore />} />
     <Route path='/details/:id' element={<Details />} />
     <Route path='/seats' element={<Seats />} />
     <Route path='/checkout' element={<Checkout />} />
     <Route path='/payment' element={<Payment />} />
     <Route path='/ticket' element={<Ticket />} />
     <Route path='/download' element={<Download />} />
     <Route path='/savedplan' element={<SavedPlan />} />
     <Route path='/settings' element={<Settings />} />
    </Routes>

    
  )
}

export default App