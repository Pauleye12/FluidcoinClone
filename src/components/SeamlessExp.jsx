import { motion } from "framer-motion";

function SeamlessExp() {
  const textVariant = {
    initial: {
      scale: 0.3,
      opacity: 0,
      y: "50px",
    },
    inView: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
        repeat: 0,
      },
    },
  };
  const picVariant = {
    initial: {
      scale: 1,
    },
    onHover: {
      scale: 1.1,

      transition: {
        duration: 0.2,
        ease: "easeOut",
      repeat:0
      },
    },
  };
  return (
    <section className="bg-black ">
      <div className="wrapper pt-[112px] px-[24px] pb-[96px] mx-[9px] lg:grid lg:grid-cols-12 gap-[24px] ">
        <div className="mt-[24px] col-span-5 ">
          <motion.h1
            variants={textVariant}
            initial="initial"
            whileInView="inView"
            className="lg:text-[45px] text-3xl font-[500] text-[rgb(168_255_121)] leading-[32.5px] lg:leading-[48px] "
          >
            A Seamless Experience for Your Business and Customers
          </motion.h1>
          <motion.p
            variants={textVariant}
            initial="initial"
            whileInView="inView"
            className="lg:text-[17px] text-xs leading-[18px] font-[500] text-[white] mt-[24px] "
          >
            Build With Fluidcoins. Our Well Documented APIs Give You Access To
            The Technology We Used To Build Our Crypto Products. We’ve Done The
            Work, All You Need To Do Is Make Use Of These Resources At Your
            Fingertips And Take Your Business To The Moon.
          </motion.p>

          <motion.button
            variants={textVariant}
            initial="initial"
            whileInView="inView"
            className=" border-[2px] px-[24px] py-[20px] mt-[32px] border-white rounded-[1000px] text-white font-[600] text-[15px] "
          >
            Access The Docs
          </motion.button>
        </div>
        <motion.div className=" lg:col-span-7 mt-24 lg:mt-0 ">
          <motion.img
            variants={picVariant}
            initial="initial"
            whileHover="onHover"
            src="https://res.cloudinary.com/fluidcoins/image/upload/v1663066764/marketing-site/fluidcoins-v3/carbon_n6mkua.webp"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}

export default SeamlessExp;
