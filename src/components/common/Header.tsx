import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <div className="h-24 w-full flex items-center justify-between gap-4 pr-8 sticky top-0 z-50 bg-white">
      <div className="flex flex-row">
        <div>
          <SidebarTrigger />
        </div>
        <InputGroup className="lg:w-100 w-50 h-11 bordered rounded-sm">
          <InputGroupInput placeholder="Search product, supplier, order" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex flex-row justify-center items-center gap-1 lg:gap-4">
        <span className="text-sm lg:text-md">
          <Bell />
        </span>
        <div>
          <Avatar className="w-8 h-8 lg:w-11 lg:h-11">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
