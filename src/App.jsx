import { Button } from "@material-tailwind/react";
import Home from "./pages/Home";

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Button>Button</Button>;

      <Home/>
    </>
  )
}

export default App
