import  { useState } from "react";
import NavLink from "./NavLink";
import { RightArrow } from "./RightArrow";
import { Logo } from "./logo";
import { MotionConfig, motion } from "framer-motion";

function Header() {
  const variants = {
    LogoInitial: {
      y: "-70px",
      opacity: 0,
      scale: 0,
    },
    LogoSlideDown: {
      y: 0,
      opacity: 1,
      scale: 1,
      // transition: {

      // }
    },
    NavlinkBgInitial: {
      opacity: 0,
      scale: 0,
    },
    NavlinkBgShow: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        when: "beforeChildren",
        duration: 0.5,
        ease: "easeOut",
        
        staggerChildren: 0.1,
      },
    },
    NavlinksInitial: {
      opacity: 0,
      y: "80%",
    },
    NavlinksShow: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        
      },
    },
  };
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
  

  // const navVariants = {
  //   initial: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delay: 1.4,
  //       when: "beforeChildren",
  //       duration: 0.7,
  //       ease: "easeIn",
  //       staggerChildren: 0.3,
  //     },
  //   },
  // };

  const navItemVariants = {
    NavlinkBgInitial: {
      opacity: 0,
      y: "80%",
    },
    NavlinkBgShow: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        
      },
    },
  };
  // const CreateAcctBtnVariants = {
  //   initial: {
  //     scale: 1,
  //     backgroundColor: "#ededed",
  //     // color: "#ededed",
  //   },
  //   animate: {
  //     scale: 1.1,
  //     backgroundColor: "#000000",
  //     transition: {
  //       ease: "easeInOut",
  //     },
  //   },
  // };
  const [showBlack, setShowBlack] = useState(false);
  // const acctBtn = useAnimationControls();
  const handleEnterAcc = () => {
    // acctBtn.start("animate");
    setShowBlack(true)
  };
  const handleLeaveAcc = () => {
    // acctBtn.start("animate");
    setShowBlack(false);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const handleHover = () => {
    setShowDropdown(!showDropdown)
    
  }

  return (
    <div className="px-[32px] max-w-screen w-full pt-[36px]">
      <MotionConfig
        transition={{
          duration: 0.5,
          delay: 0.8,
          ease: "easeOut",
          
        }}
      >
        <header className="flex justify-between items-center h-max">
          <motion.div
            variants={variants}
            initial="LogoInitial"
            animate="LogoSlideDown"
          >
            <Logo width={180} />
          </motion.div>
          <button className="bg-white text-black text-[14px] font-[500] rounded-[1000px] px-[22px] py-[12px] lg:hidden ">
            Menu
          </button>
          <motion.div className="hidden lg:flex ">
            <motion.ul
              variants={variants}
              initial="NavlinkBgInitial"
              animate="NavlinkBgShow"
              className="flex rounded-[1000px] items-center bg-white p-[8px] gap-[8px]"
            >
              {navLinks.map((navLink, index) => (
                <motion.li
                  onMouseOver={handleHover}
                  variants={navItemVariants}
                  key={index}
                >
                  <NavLink navLink={navLink} showDropdown={showDropdown} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <div className="bg-white hidden lg:flex rounded-[1000px] p-[5px] ">
            <motion.a
              // onMouseOver={handleHoverAcc}
              onMouseEnter={handleEnterAcc}
              onMouseLeave={handleLeaveAcc}
              className=" flex justify-center items-center gap-[10px] px-[14px] pr-[1px] py-[1px] font-[500] "
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create an Account
              <motion.div
                className={
                  showBlack
                    ? "grid place-items-center p-[13px] rounded-full bg-[black] scale-[1.1] duration-[0.35s]"
                    : "grid place-items-center p-[13px] rounded-full bg-[#ededed] duration-[0.35s]"
                }
                // variants={CreateAcctBtnVariants}
                // whileHover="animate"
                // animate={acctBtn}
                // initial="initial"
              >
                <RightArrow />
              </motion.div>
            </motion.a>
          </div>
        </header>
      </MotionConfig>
    </div>
  );
}

export default Header;
