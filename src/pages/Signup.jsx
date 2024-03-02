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

import { useNavigate } from "react-router-dom";
import axios from "axios";



function Signup() {

  const [username, setUsername] = useState('')
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {

    if (username === "") {
      alert("Enter user name")
      return;
    }


    if (email === "") {
      alert("Email is required");
      return;
    }

    if (password === "") {
      alert("Password is required");
      return;
    }
    if (confirmpassword === "") {
      alert("Password is required");
      return;
    }

    if (password !== confirmpassword) {
      alert("Password and confirmpassword should be same");
      return;
    }



    const data = {
      username: username,
      email: email,
      password: password,

    };

    console.log(data);

    try {
      const response = await axios.post("/api/auth/register", data);
      console.log(response);
      if (response.status === 201) {
        alert("Registration Successful");
        const access_token = response.data.data.access_token;
        const refresh_token = response.data.data.refresh_token;
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
        navigate("/dashboard");
      }
      if (response.status === 400) {
        alert("Registration Failed");
      }
      if (response.status === 500) {
        alert("Error Occured");
      }
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <>
      <div className="w-full bg-purple-50 pt-3 sticky top-0 z-40">
        <Navbarcomponent />
      </div>
      <div className="w-full flex items-center justify-center pt-9 pb-9 bg-purple-50">
        <Card color="transparent" shadow={false} className="bg-white p-8 z-0">
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to login.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Username
              </Typography>
              <Input
                size="lg"
                placeholder="abc"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setUsername(e.target.value)}
              />
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
                onChange={(e) => setemail(e.target.value)}
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
                onChange={(e) => setpassword(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Confirm-Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
            </div>
            <Button onClick={handleSubmit} className="mt-6 bg-purple-300 text-white hover:bg-purple-100 hover:text-black" fullWidth>
              Sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don&apos;t have an account?{" "}
              <NavLink to='/' className="font-semibold text-black">
                Login
              </NavLink>
            </Typography>
          </form>
        </Card>
      </div >
      <div className="w-full container mx-auto">
        <Footer />
      </div>
    </>
  )
}

export default Signup;