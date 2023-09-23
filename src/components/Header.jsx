import React from "react";
import NavLink from "./NavLink";
import { RightArrow } from "./RightArrow";
import { Logo } from "./logo";

function Header() {
  const navLinks = [
    {
      link: "Business",
      active: true,
      dropDown: false,
      options: [],
    },
    {
      link: "Personal",
      active: false,
      dropDown: false,
      options: [],
    },
    {
      link: "Products",
      active: false,
      dropDown: true,
      options: [
        {
          image: "",
          name: "Dashboard",
          desc: "Manage all transaction in one place",
        },
        {
          image: "",
          name: "WaaS",
          desc: "Wallet as a service",
        },
        {
          image: "",
          name: "CaaS",
          desc: "Compliance as a service",
        },
        {
          image: "",
          name: "Checkout",
          desc: "Intuitive widget to accept crypto",
        },
        {
          image: "",
          name: "Invoice",
          desc: "Crypto invoies",
        },
        {
          image: "",
          name: "Payment Link",
          desc: "No-code payment pages",
        },
        {
          image: "",
          name: "Earn",
          desc: "Up to 6% interest on USDT savings",
        },
        {
          image: "",
          name: "Liquidity",
          desc: "Swap between fiat and crypto quickly",
        },
        {
          image: "",
          name: "Fluidshop",
          desc: "Customisable online store",
        },
        {
          image: "",
          name: "Flip",
          desc: "Web3 savings and payment app",
        },
        {
          image: "",
          name: "Link",
          desc: "Digital asset data at your fingertips",
        },
      ],
    },
    {
      link: "Usecases",
      active: false,
      dropDown: true,
      options: [
        {
          image: "",
          name: "Freelancers",
          desc: "",
        },
        {
          image: "",
          name: "FinTech",
          desc: "",
        },
        {
          image: "",
          name: "Platforms",
          desc: "",
        },
        {
          image: "",
          name: "E-commerce",
          desc: "",
        },
        {
          image: "",
          name: "Betting",
          desc: "",
        },
      ],
    },
  ];
  return (
    <div className="px-[32px] max-w-screen w-full pt-[36px]">
      <header className="flex justify-between items-center h-max">
        <div>
          <Logo width={180} />
        </div>
        <button className="bg-white text-black text-[14px] font-[500] rounded-[1000px] px-[22px] py-[12px] lg:hidden ">
          Menu
        </button>
        <div className="hidden lg:flex ">
          <ul className="flex rounded-[1000px] items-center bg-white p-[8px] gap-[8px]">
            {navLinks.map((navLink, index) => (
              <NavLink key={index} navLink={navLink} />
            ))}
          </ul>
        </div>
        <div className="bg-white hidden lg:flex rounded-[1000px] p-[5px] ">
          <a
            className=" flex justify-center items-center gap-[10px] px-[14px] pr-[1px] py-[1px] font-[500] "
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create an Account
            <div className="grid place-items-center p-[13px] rounded-full bg-[#ededed]">
              <RightArrow />
            </div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
