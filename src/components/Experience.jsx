
import { Checkout } from './SVGs/checkout';
import { Earn } from './SVGs/earn';
import { Liquidity } from './SVGs/liquidity';
import { Wallet } from './SVGs/wallet';
import Card from './Card';
import { CheckoutArr } from './SVGs/checkoutArrow';
import { EarnArr } from './SVGs/earnArrow';
import { motion } from 'framer-motion';

function Experience() {
    const cardCont = [
      {
        image: <Checkout />,
        header: "Checkout",
        bgStyle:"Checkout",
        text: "The Checkout Widget Features The Swiftest Payment Structure For Your Customers. Simple And Intuitive, Designed To Create An Effortless Payment Experience For Your Customers.",
        btnStyle: "",
        arrowStyle: <CheckoutArr />,
      },
      {
        image: <Earn />,
        header: "Earn",
        bgStyle:"Earn",
        text: "Unlock A New Way To Gain Interest On Your Business Savings. With Earn, You Get To Accrue Up To 6% APY On Your Stablecoins Savings. No Lock Time",
        btnStyle: "",
        arrowStyle: <EarnArr className="text-white" />,
      },
      {
        image: <Liquidity />,
        header: "Liquidity",
        bgStyle:"Liquidity",
        text: "Enjoy Frictionless Crypto And Naira Swaps With Liquidity. Seamlessly Exchange Your Naira For Stablecoins (Vice-Versa) And One Stablecoin For Another Without Third Party Interference. It Is Easy Fast And Secure.",
        btnStyle: "",
        arrowStyle: <EarnArr />,
      },
      {
        image: <Wallet />,
        header: "Wallets As A Service",
        bgStyle: "Wallet",
        text: "Everything You Need To Build And Deploy Crypto-Powered Financial Products Faster. Allow Your Customers Create Wallets, You Also Get To Connect Your Existing Products To The Crypto Economy Easily.",
        btnStyle: "",
        arrowStyle: <EarnArr />,
      },
    ];

    const bgVariant ={
      initial: {
        scale:0.3,
        opacity: 0,
        y:"0.1px"
      },
      inView:{
        scale: 1,
        opacity: 1,
        y:0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
      repeat:0
        }
      }
  }
  const cardVariant = {
    initial: {
      scale: 0.3,
      opacity: 0,
      y: "10px",
    },
    inView: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeOut",
        
      },
    },
  };
  return (
    <motion.div
      variants={bgVariant}
      initial="initial"
      whileInView="inView"
      className=" lg:px-[24px] px-2  "
    >
      <motion.div className="expGradient flex flex-col xl:flex-row justify-between gap-[30px] w-full pt-[40px] pb-[28px] lg:py-[80px] px-[20px] lg:px-[48px] ">
        <motion.h2
          variants={cardVariant}
          initial="initial"
          whileInView="inView"
          className="capitalize text-white font-[700] xl:max-w-[300px] w-full text-[24px] lg:text-[36px] "
        >
          A seamless experience for your business and customers
        </motion.h2>

        <div className="flex flex-col gap-[20px]">
          <div className="grid gap-[10px] lg:gap-5 grid-cols-[1fr] md:grid-cols-[1fr_1fr]">
            {" "}
            {cardCont.map((content, index) => (
              <motion.div
                variants={cardVariant}
                initial="initial"
                whileInView="inView"
                key={index}
              >
                <Card content={content} />
              </motion.div>
            ))}{" "}
          </div>
          <div className="flex justify-between bg-white xl:max-w-[407px] w-full items-center rounded-[1000px] self-end py-[8px] pl-[20px] pr-[8px] ">
            <p className=" font-[600] leading-[24px]">EXPLORE ALL</p>
            <div className="w-[32px]">
              <CheckoutArr />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Experience