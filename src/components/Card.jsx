import React from 'react'
import { RightArrow } from './RightArrow'
import { Checkout } from './SVGs/checkout'

function Card({content}) {
  return (
    <div className={`bg-white flex flex-col justify-between items-start rounded-[1.25rem] pl-[24px] pb-[12px] pr-[10px] pt-[20px] xl:max-w-[400px] ${content.bgStyle} h-[458px]  `}>
      <div className='flex flex-col justify-start items-start gap-[10px]'>
        <div className="max-w-[176px] w-full">{content.image}</div>
        <div className='mt-[18px]'>
          <h2 className='font-[600] text-[20px] leading-[28px] '>{content.header}</h2>
          <p className='mt-[12px] text-[14px] font-[500] mb-[8px] pr-[24px] leading-[19.25px] '> {content.text}</p>
        </div>
      </div>
      <div className='flex self-end gap-[4px] ' >
        <a className='px-[28px] text-[17px] font-[500] py-[10px] rounded-[1000px] cursor-pointer '>Learn More</a>
        <button className='w-[44px] grid place-items-center '>
          {content.arrowStyle}
        </button>
      </div>
    </div>
  );
}

export default Card