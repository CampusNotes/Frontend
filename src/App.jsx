import { Route, Routes } from "react-router"
import { Dashboard, Home, Login, Signup } from "./pages"
import { FileUploadForm } from "./components"


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/fileupload' element={<FileUploadForm />} />
    </Routes>
  )
}

export default App
