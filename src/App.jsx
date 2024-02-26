import { Route, Routes } from "react-router"
import { Dashboard, Home, Login, Signup } from "./pages"


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
