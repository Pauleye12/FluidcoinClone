
import { Logo } from './logo';

function Infrasctructure() {
  return (
    <div className="sm:pt-[212px] pt-[80px]  pb-[120px] overflow-hidden md:grid md:place-items-center flex justify-center ">
      <div className="flex flex-col ">
        <header className="flex justify-center items-center gap-[0px] text-white font-[500] text-[22px] lg:text-[24px] flex-col mb-[56px] leading-[23px] lg:leading-[30px] ">
          <h1 className="">Crypto Infrastructure for</h1>
          <h1 className="">African Business</h1>
        </header>

        <section className=" flex flex-col items-start justify-center font-[700] text-[#1f1f1f] text-[44px] lg:text-[88px] lg:leading-[105px] leading-[55px] ">
          <div className="flex justify-center mx-auto items-center lg:gap-[40px] gap-[20px]">
            <a href="">Payment Link</a>
            <a href="">Invoice</a>
          </div>
          <div className="flex justify-start  items-center lg:gap-[40px] gap-[20px] mx-auto ">
            <a href="">Compliance</a>
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
            <a href="">Dashboard</a>
          </div>
          <div className="flex justify-center mx-auto items-center lg:gap-[40px] gap-[20px] ">
            <a href="">Checkout</a>
            <a href="">Flip</a>
            <a href="">Wallets</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Infrasctructure