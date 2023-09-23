import { VirtualCard } from "./SVGs/virtualCard";
import { VirtualCardMobile } from "./SVGs/virtualCardsMobile";

function VirtualCards() {
    return (
      <div className="w-full h-[87vh] mt-72 lg:mt-[250px] relative xl:px-[83px] px-[40px] overflow-x-clip ">
        <div className="lg:max-w-[300px] w-full text-black z-10 relative bottom-[30px] ">
          <h1 className=" font-[600] text-5xl lg:text-[67px] lg:leading-[65px] leading-[42px] ">
            Create Virtual Cards
          </h1>
          <p className="mt-[20px] text-[15px] font-[500] leading-[18px] ">
            Create, Manage And Use Your Virtual USD Cards Backed By Stablecoins
            For International Payments. Swift And Limitless.
          </p>
          <button className="mt-[20px] px-[20px] py-[10px] border border-black rounded-[1000px]  text-sm lg:text-[18px] font-[600] ">
            Create Your Cards
          </button>
        </div>

        <div className="z-[11] absolute right-[0] xl:right-[5%] max-w-[800px] w-full top-[-40%] xl:top-[-25%] hidden lg:block ">
          <img
            src="https://res.cloudinary.com/fluidcoins/image/upload/v1663063628/marketing-site/fluidcoins-v3/virtual-image_ynxcsc.webp"
            alt=""
          />
        </div>
        <div className="z-[11] absolute left-[50%] translate-x-[-50%] xl:right-[5%] max-w-[400px] w-full top-[35%] sm:top-[30%] xl:top-[-25%] lg:hidden">
          <img
            src="https://res.cloudinary.com/fluidcoins/image/upload/v1663079473/marketing-site/fluidcoins-v3/virtual-image_culcrx.webp"
            alt=""
          />
        </div>
        <VirtualCard />
        <VirtualCardMobile />
      </div>
    );
}

export default VirtualCards;
