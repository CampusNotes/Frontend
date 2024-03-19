// import React from "react";
import {
  Card,

  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";
import {

  UserCircleIcon,
  Cog6ToothIcon,

  PowerIcon,
} from "@heroicons/react/24/solid";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom'
import { useState } from "react";

export default function Sidebar({ selectedTab }) {
  const [selected, setSelected] = useState(1);
  const setSelectedItem = (e) => {

    setSelected(e)
    selectedTab(e)
  }



  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-opacity-65 backdrop-blur-md">
      <div className="mb-2 p-4 flex items-center gap-11">
        <div>
          <UserCircleIcon className="h-10 w-10" />
        </div>
        <div>
          <h4 className="text-sm">Username</h4>
        </div>
        <NavLink><div>
          <EllipsisVerticalIcon className="h-5 w-5" />
        </div></NavLink>
      </div>
      <List>
        <ListItem className="hover:bg-purple-300" selected={selected === 1} onClick={() => setSelectedItem(1)}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem className="hover:bg-purple-300" selected={selected === 2} onClick={() => setSelectedItem(2)}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Library
        </ListItem>
        <ListItem className="hover:bg-purple-300" selected={selected === 3} onClick={() => setSelectedItem(3)}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Upload
        </ListItem>
      </List>
    </Card >
  );
}