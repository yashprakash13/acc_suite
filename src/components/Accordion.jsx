import React, { useState } from "react"

const Accordion = ({ data }) => {
  const [item, setItem] = useState(data)
  function handleToggle() {
    let newActive = item.active === 1 ? 0 : 1
    setItem({ ...item, active: newActive })
  }
  return (
    <div>
      <div
        className={`w-screen lg:w-[900px] flex flex-col gap-3 p-5 md:p-11 duration-500 group ${
          item.active === 1 ? "is-active" : ""
        }`}
      >
        <div className="flex justify-between md:justify-center md:items-center">
          <div
            className="w-full text-md md:text-xl font-serif group-[.is-active]:mb-7 group-[.is-active]:font-bold duration-500 cursor-pointer"
            onClick={handleToggle}
          >
            {data.q}
          </div>
          <div className="hidden md:block text-md md:text-lg lg:text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-500  ">
            &gt;
          </div>
        </div>
        <div
          className="text-md md:text-lg overflow-hidden max-h-0 group-[.is-active]:mb-7 group-[.is-active]:max-h-[200px] duration-500 cursor-pointer"
          onClick={handleToggle}
        >
          {data.a}
        </div>
        <div className="border border-lightHighlight w-full"></div>
      </div>
    </div>
  )
}

export default Accordion
