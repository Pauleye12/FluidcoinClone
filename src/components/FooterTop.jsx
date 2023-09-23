

function FooterTop() {
  return (
    <div className="mx-[9px] pl-[20px]  xl:pl-[56px] lg:grid lg:grid-cols-8 flex flex-col gap-[3rem] lg:gap-[2rem] pr-[20px] ">
      <div className=" lg:col-span-3 ">
        <h1 className=" font-[500] text-[40px] xl:text-[64px] xl:leading-[64px] max-w-[300px] leading-[40px] text-[#a8ff79] specialText ">
          Let’s Create Magic Together.
        </h1>
        <p className=" font-[500] leading-[24px] xl:text-[20px] xl:leading-[28px] text-white mt-[20px] lg:mt-[36px] max-w ">
          Create a free account to start receiving payments, selling online, and
          building crypto-powered financial products
        </p>
      </div>
      <div className="lg:col-span-5 flex flex-col gap-[6px] ">
        <div className="overflow-hidden sm:h-[220px] h-[160px] lg:h-[288px] rounded-[1000px] ">
          <img
            className=" w-full object-contain object-center  "
            src="https://res.cloudinary.com/fluidcoins/image/upload/v1663063629/marketing-site/fluidcoins-v3/footer-image_l4s9o5.webp"
            alt=""
          />
        </div>
        <div className="w-full text-white flex flex-col lg:flex-row justify-between lg:gap-[24px] gap-3 text-[20px] xl:text-[32px] font-[400] ">
          <button className="w-[100%] border border-[#a8ff78] rounded-[1000px] py-[40px] xl:py-[60px] ">
            Create Account
          </button>
          <button className="w-[100%] border border-[white] rounded-[1000px] py-[40px]">
            {" "}
            Speak to sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterTop