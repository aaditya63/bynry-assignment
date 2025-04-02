import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
