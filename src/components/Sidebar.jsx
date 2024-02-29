import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

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
        <ListItem className="hover:bg-purple-300">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem className="hover:bg-purple-300">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Library
        </ListItem>
        <ListItem className="hover:bg-purple-300">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Upload
        </ListItem>
      </List>
    </Card>
  );
}