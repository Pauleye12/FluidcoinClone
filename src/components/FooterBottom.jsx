import { Facebook } from "./SVGs/Facebook";
import { FooterLogo } from "./SVGs/FooterLogo";
import { Twitter } from "./SVGs/Twitter";



function FooterBottom() {
  return (
    <div className="mt-[80px] px-[16px] ">
      <div className="flex lg:flex-row flex-col items-start mt-[16px] mx-[27px] pt-[16px] gap-24 lg:gap-0 ">
        <div className="flex flex-col max-w-[300px] w-full text-white font-[600] gap-[32px] ">
          <FooterLogo />
          <p>support@fluidcoins.com</p>
          <p className="mt-[32px]">
            251 Little Falls Drive, New Castle County, Wilmington, DE 19808
          </p>
          <div className="flex gap-[24px]">
            <Facebook />
            <Twitter />
          </div>
        </div>
        <div className="lg:mt-[12px]  flex flex-col gap-24 sm:gap-0 sm:flex-row w-full lg:justify-around justify-between ">
          <div>
            <ul className="flex flex-col gap-[32px] text-white font-[600] ">
              <li className=" text-[#888888] font-[400] mb-[8px] ">Company</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Help center</li>
              <li>Contact Sales</li>
              <li>Coverage</li>
              <li>Exchange Rates</li>
              <li>AML (Anti Money Laundering)</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-[32px] text-white font-[600] ">
              <li className=" text-[#888888] font-[400] mb-[8px] ">Flip</li>
              <li>Checkout</li>
              <li>Payment Link</li>
              <li>Dashboard</li>
              <li>Invoice</li>
              <li>Wallet as a Service</li>
              <li>Earn</li>
              <li>Liquidity</li>
              <li>FluidShop</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-[32px] text-white font-[600] ">
              <li className=" text-[#888888] font-[400] mb-[8px] ">
                Developers
              </li>
              <li>API Reference</li>
              <li>API Documentation</li>
              <li>Status Page</li>
              <li>Slack</li>
              <li>Developers Slack</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-white font-[400] text-[20px] mt-[160px] pt-[20px] ">
        © 2022 Fluidcoins Inc. All rights reserved.
      </div>
    </div>
  );
}

export default FooterBottom