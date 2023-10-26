import React from "react";
import { Dropdown } from "./Dropdown";
import { motion } from "framer-motion";

function NavLink({ navLink, showDropdown }) {
  const variants = {
    
  };
  return (
   
      <a
        className={
          navLink.active
            ? " flex justify-center items-center gap-[6px] px-[16px] py-[12px] font-[500] bg-black text-[#93ff83] rounded-[1000px] "
            : " flex justify-center items-center gap-[6px] px-[16px] py-[12px] font-[500] "
        }
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        {navLink.link}

        {navLink.dropDown && <Dropdown  />}
      </a>
    
  );
}

export default NavLink;
