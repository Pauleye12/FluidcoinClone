
import { Logo } from './logo';
import { motion } from 'framer-motion';

function Infrasctructure() {

  const headerWrapperVariant = {
    initial: {
      y: "100px",
      opacity:1
      
    },
    inView: {
      y: 0,
      opacity:1,
      transition: {
        duration:0.3,
        repeat:0,
      }
    }
  }
  // const headerTextVariant ={
  //   initial: {
  //     scale:0,
  //     opacity:0
  //   },
  //   inView:{
  //     scale:1,
  //     opacity: 1,
  //     transition: {
  //       delay:5,
  //       duration:0.3
  //     }
  //   }
  // }

  const linkVariant = {
    initialLeft: {
      x: "-100px",
      opacity: 0,
    },
    initialRight: {
      x: "100px",
      opacity: 0,
    },
    inView: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: "easeOut",
        repeat: 0,
      },
    },
  };

  return (
    <div className="sm:pt-[212px] pt-[80px]  pb-[120px] overflow-hidden md:grid md:place-items-center flex justify-center ">
      <div className="flex flex-col ">
        <motion.div
          variants={headerWrapperVariant}
          initial="initial"
          whileInView="inView"
          className="flex justify-center items-center gap-[0px] text-white font-[500] text-[22px] lg:text-[24px] flex-col mb-[56px] leading-[23px] lg:leading-[30px] "
        >
          <motion.h1 className="">Crypto Infrastructure for</motion.h1>
          <motion.h1 className="">African Business</motion.h1>
        </motion.div>

        <section className=" flex flex-col items-start justify-center font-[700] text-[#1f1f1f] text-[44px] lg:text-[88px] lg:leading-[105px] leading-[55px] ">
          <div className="flex justify-center mx-auto items-center lg:gap-[40px] gap-[20px]">
            <motion.a
              variants={linkVariant}
              initial="initialLeft"
              whileInView="inView"
              href=""
            >
              Payment Link
            </motion.a>
            <motion.a
              variants={linkVariant}
              initial="initialRight"
              whileInView="inView"
              href=""
            >
              Invoice
            </motion.a>
          </div>
          <div className="flex justify-start  items-center lg:gap-[40px] gap-[20px] mx-auto ">
            <motion.a
              variants={linkVariant}
              initial="initialLeft"
              whileInView="inView"
              href=""
            >
              Compliance
            </motion.a>
            <div className="p-[4px] gradient rounded-[1000px] flex justify-center items-center translate-y-[8px] ">
              <button className="bg-black p-[8px] lg:p-[0px] lg;py-[16px] lg:px-[24px] rounded-[1000px] lg:hidden ">
                {" "}
                <Logo width="88" height="17.36" />
              </button>
              <button className=" hidden lg:flex bg-black py-[16px] px-[24px] rounded-[1000px] ">
                {" "}
                <Logo width={160} />
              </button>
            </div>
            <motion.a
              variants={linkVariant}
              initial="initialRight"
              whileInView="inView"
              href=""
            >
              Dashboard
            </motion.a>
          </div>
          <div className="flex justify-center mx-auto items-center lg:gap-[40px] gap-[20px] ">
            <motion.a
              variants={linkVariant}
              initial="initialLeft"
              whileInView="inView"
              href=""
            >
              Checkout
            </motion.a>
            <motion.a
              variants={linkVariant}
              initial="initialLeft"
              whileInView="inView"
              href=""
            >
              Flip
            </motion.a>
            <motion.a
              variants={linkVariant}
              initial="initialRight"
              whileInView="inView"
              href=""
            >
              Wallets
            </motion.a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Infrasctructure