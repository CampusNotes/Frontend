import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Footer, Navbarcomponent } from "../components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {

  const[email,setemail]= useState('');
  const[password,setpassword]=useState('');


  const handleSubmit=()=>{

    
    

  }

  return (
    <>
      <div className="w-full bg-purple-50 pt-3 sticky top-0 z-40">
        <Navbarcomponent />
      </div>
      <div className="w-full flex items-center justify-center pt-9 pb-9 bg-purple-50">
        <Card color="transparent" shadow={false} className="bg-white p-8 z-0">
          <Typography variant="h4" color="blue-gray">
            Log In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to login.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}

                onChange={(e)=>setemail(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>
            {/* <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            /> */}
            <Button onClick={handleSubmit} className="mt-6 bg-purple-300 text-white hover:bg-purple-100 hover:text-black" fullWidth>
              logi in
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don&apos;t have an account?{" "}
              <NavLink to='/signup' className="font-semibold text-black">
                Sign In
              </NavLink>
            </Typography>
          </form>
        </Card>
      </div>
      <div className="w-full container mx-auto">
        <Footer />
      </div>
    </>
  )
}

export default Login