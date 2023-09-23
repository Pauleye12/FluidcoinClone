
import Text from './Text';
import { GetEquity } from './GetEquity';
import { ThePeer } from './ThePeer';
import { Orchestrate } from './Orchestrate';
import { HomeSvg } from './Homesvg';

function Home() {
    // const texts = ["Crypto", "Infrastructure", "for Business"]
  return (
    <div className="mt-[] flex flex-col lg:flex-row  lg:items-center overflow-hidden lg:ml-[32px] ml-[22px] ">
      <div className=" pt-[80px] lg:max-w-[540px] w-full text-white ">
        <div className="flex flex-wrap items-center lg:items-start lg:flex-col gap-1 lg:gap-[8px] pr-[24px] lg:pr-[0px] ">
          <div className=" flex items-center gap-[12px] text-white text-[43px] lg:text-[64px] font-[500] ">
            <Text val="Crypto" />{" "}
            <img
              className="bg-white rounded-[1000px] max-w-[120px] lg:max-w-[130px] xl:max-w-[140px] translate-y-[8px]"
              src="https://res.cloudinary.com/fluidcoins/image/upload/v1662475906/marketing-site/fluidcoins-v3/hero-text-mask_z4spfw.png"
              alt=""
            />
          </div>
          <div>
            <Text val="Infrastructure" />
          </div>
          <div>
            <Text val="for Businesses" />
          </div>
        </div>

        <p className="pt-[16px] pr-[46px] lg:pr-[0px] whitespace-normal text-[15px] lg:text-[16px] font-[500] lg:max-w-[500px] lg:w-full ">
          Seamlessly process payments, sell online, build crypto-powered
          financial products, stay compliant, or use our intuitive tools
          designed to grow your business.
        </p>

        <div className="mt-[40px] flex gap-[5px] ">
          <button className="bg-white rounded-[1000px] text-black ">
            <a
              className="px-[14px]  py-[1px] font-[500] "
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create an Account
            </a>
          </button>
          <h2 className=" specialText font-[500] px-[14px] py-[12px] ">
            Speak to Sales
          </h2>
        </div>

        <div className="hidden mt-[128px] lg:flex flex-col font-[600]">
          <h3>TRUSTED BY</h3>
          <div className="flex mt-[20px] items-center gap-[10px]">
            <GetEquity />
            <ThePeer />
            <Orchestrate />
          </div>
        </div>
      </div>
      <div className=" mt-[96px] lg:mt-[0px] relative overflow-x-hidden lg:pl-[64px]   ">
        <img
          className=" hidden lg:flex max-w-[1020px] w-[full] "
          src="https://res.cloudinary.com/fluidcoins/image/upload/v1662995733/marketing-site/fluidcoins-v3/hero-desktop_skp1sl.webp"
          alt=""
        />
        <img
          className="lg:hidden max-w-[768px]  "
          src="https://res.cloudinary.com/fluidcoins/image/upload/v1662995727/marketing-site/fluidcoins-v3/hero-mobile_otbiyd.webp"
          alt=""
        />
        <div className="absolute bottom-0 left-[-200px] ">
          <HomeSvg />
        </div>

        <div className="lg:hidden mt-[90px] flex flex-col font-[600] text-white text-[12px] tracking-[3.3px] ">
          <h3>TRUSTED BY</h3>
          <div className="flex mt-[20px] items-center gap-[10px]">
            <GetEquity />
            <ThePeer />
            <Orchestrate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home