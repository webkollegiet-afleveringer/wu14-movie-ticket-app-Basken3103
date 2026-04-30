import { Route, Routes, useLocation } from "react-router-dom"
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
import { useEffect } from "react"

function App() {

  const location = useLocation();
  let pageClass = location.pathname === "/" ? "home" : location.pathname.split("/")[1];

  useEffect(() => {
    const body = document.body;
    const className = `page-${pageClass}`;
    body.classList.add(className);
    return () => {
      body.classList.remove(className);
    };

  }, [location.pathname])

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