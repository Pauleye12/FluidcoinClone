import BridgingCont from "./BridgingCont";
import { Compliance } from "./SVGs/Compliance";
import { HitchFree } from "./SVGs/hitchFree";
import { MultiCurrency } from "./SVGs/multiCurrency";
import { SeamlessPay } from "./SVGs/seamlessPay";
import { Secure } from "./SVGs/Secure";
import { Setup } from "./SVGs/Setup";
import { motion } from "framer-motion";
function Bridging() {
  const rightCont = [
    {
      svg: <HitchFree />,
      header: "Hitch-Free Business Operations",
      text: "Our dashboard makes it extremely easy to monitor your business operations. You get to view and manage all your customer transactions from one place. It’s also the perfect place to liquidate your idle funds for stablecoins.",
    },
    {
      svg: <SeamlessPay />,
      header: "Seamless Payment And Settlement",
      text: "We make it easy for your customers to transact with your business. You get the exact amount in your local currency irrespective of market fluctuations when you receive payments from customers. Also, you can withdraw funds to your bank accounts whenever you like.",
    },
    {
      svg: <Secure />,
      header: "Secure Account",
      text: "We take security seriously so every payment made using our platform is 100% secure.",
    },
    {
      svg: <Compliance />,
      header: "Complete Compliance",
      text: "We’ve done the heavy-lifting so you can focus on running your business smoothly. Protect your customers and satisfy AML requirements.",
    },
    {
      svg: <Setup />,
      header: "Quick Setup",
      text: "Setting up your Fluidcoins Account is one of the easiest things to do. In a few minutes, you’re all set to scale your business. Our API integrations are also developer-friendly.",
    },
    {
      svg: <MultiCurrency />,
      header: "Multi-Currency Support",
      text: "We provide support for over 8 cryptocurrencies. See our support here.",
    },
  ];
  const textVariant = {
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
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
        repeat: 0,
      },
    },
    inViewNoDel: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
  
        ease: "easeOut",
        repeat: 0,
      },
    },
  };
  return (
    <div className="lg:h-screen w-screen bg-black lg:overflow-hidden  ">
      <div className="bg-[rgb(168_255_121)] greenBg translate-y-[55px] pl-3 lg:pl-[28px] w-screen h-full ">
        <div className="bg-white lg:h-screen w-full lg:translate-y-[-55px] translate-y-[-35px] pt-[96px] lg:overflow-hidden flex gap-[20px]">
          <div className="lg:flex gap-[32px] w-full px-[24px]">
            <div className=" w-full ">
              <div className=" imgBg lg:max-w-[500px] w-full">
                <motion.h2
                  variants={textVariant}
                  initial="initial"
                  whileInView="inView"
                  className="mt-[10px] mb-[72px] text-[36px] font-[600] text-[rgb(3_35_67)] leading-[40px]  "
                >
                  Bridging the Gap Between Crypto and Fiat for You
                </motion.h2>
                <div>
                  <motion.img
                    variants={textVariant}
                    initial="initial"
                    whileInView="inView"
                    src="https://res.cloudinary.com/fluidcoins/image/upload/v1663063630/marketing-site/fluidcoins-v3/features-image_irgrpe.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <motion.div
              variants={textVariant}
              initial="initial"
              whileInView="inViewNoDel"
              className=" mt-10 scroll max-w-xl w-full h-full overflow-y-auto px-[20px] pl-[40px] flex flex-col gap-[44px] pb-10 "
            >
              {rightCont.map((card, index) => (
                <BridgingCont key={index} card={card} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridging;
