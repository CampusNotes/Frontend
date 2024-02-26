import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  BookOpenIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from 'react-router-dom'


function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4"><NavLink to='/'>Home</NavLink></ListItem>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Navbarcomponent() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-2xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center justify-center gap-1">
          <div className="w-7 aspect-square">
            <BookOpenIcon className="text-purple-500" />
          </div>
          <Typography
            as="a"
            variant="h6"
            className="mr-4 text-2xl font-extrabold text-purple-500 tracking-widest cursor-pointer py-1.5 lg:ml-2"
          >
            <NavLink to='/'>CampusNotes</NavLink>
          </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <NavLink to='/login'>
            <Button variant="text" size="sm" color="blue-gray">
              Log In
            </Button>
          </NavLink>
          <NavLink to='/signup'>
            <Button size="sm" className="bg-purple-300 text-white hover:bg-purple-100 hover:text-black">
              Sign In
            </Button>
          </NavLink>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}