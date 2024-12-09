// Header Component
import {
    Bell,
    Heart,
    Search,
    Settings,
    Settings2,
    UserCircle2Icon,
  } from "lucide-react";
  import React from "react";
  
  const Header = () => {
    return (
      // Header Section
      <div className="flex justify-evenly items-center max-sm:items-start py-5">
        <div className="flex gap-20 max-xl:gap-14 max-sm:gap-8 max-sm:flex-col max-sm:flex-none">
          {/* Logo */}
          <div className="text-[#3563E9] font-bold text-2xl max-sm:text-left max-sm:px-10">
            MORENT
          </div>
          {/* Search Bar */}
          <div className="flex border items-center max-sm:border-none px-5 max-sm:px-2 ">
            <div className="max-sm:border flex items-center max-sm:px-2">
            <Search className="p-[1.5]" />
            <input
              type="text"
              placeholder="Search something here"
              className="text-base py-2 px-8"
            /></div>
            <div className="max-sm:border-2 max-sm:p-2 max-sm:mx-5 ">
              <Settings2 className="p-[0.5]" />
            </div>
          </div>
        </div>
        {/* Wishlist, Notification & User Icon */}
        <div className="flex gap-7 max-sm:absolute max-sm:right-10">
          <Heart className=" text-[#596780] max-sm:hidden" />
          <Bell className=" text-[#596780] max-sm:hidden" />
          <Settings className=" text-[#596780] max-sm:hidden" />
          <UserCircle2Icon className="text-[#596780] " />
        </div>
      </div>
    );
  };
  
  export default Header;