import { Route, Routes } from "react-router"
import { Home, Login } from "./pages"


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
