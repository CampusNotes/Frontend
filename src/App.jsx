<<<<<<< HEAD
import { Button } from "@material-tailwind/react";
import Home from "./pages/Home";
=======
import { Route, Routes } from "react-router"
import Home from "./pages/Home"

>>>>>>> cf0e9805dac25a3e10c0bbb18afbf3758c2bcfd0

function App() {


  return (
<<<<<<< HEAD
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Button>Button</Button>;

      <Home/>
    </>
=======
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
>>>>>>> cf0e9805dac25a3e10c0bbb18afbf3758c2bcfd0
  )
}

export default App
