"use client";
import React, { useState } from "react";
import { Menu, Eye, EyeOff } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar"; // ShadCN's trigger
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [blurActive, setBlurActive] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-20 w-full h-14 backdrop-blur-md bg-none border-b border-white/20 flex items-center px-4 justify-between">
        {/* Sidebar Button */}
        {!blurActive && <SidebarTrigger className="size-8" />}

        <div>{}</div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setBlurActive(!blurActive)}
            className="p-2 cursor-pointer rounded-full hover:bg-white/20"
          >
            {blurActive ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          <ModeToggle />

          <div className="flex items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Admin Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">Admin</span>
          </div>
        </div>
      </nav>

      {blurActive && (
        <div className="fixed inset-0 z-10 backdrop-blur-lg bg-black/20"></div>
      )}
    </>
  );
};

export default Navbar;
