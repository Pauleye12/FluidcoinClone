

function BridgingCont({card}) {
  return (
    <div className="flex flex-col gap-4 lg:gap-[24px] ">
      <div>{card.svg}</div>
      <div className="text-[#032343] text-base font-semibold ">
        {card.header}
      </div>
      <div className=" text-sm font-medium text-[#404040] ">{card.text}</div>
    </div>
  );
}

export default BridgingCont