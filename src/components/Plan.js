import { StaticImage } from "gatsby-plugin-image"
import React from "react"

function Plan() {
  return (
    <>
      {/* <div className="relative">
        <span className="absolute">
          <StaticImage src="../images/leftTop.png" />
        </span>
      </div> */}
      <div className=" lg:mx-64 px-12 bg-white  h-auto my-24 plan z-0 bg-center rounded-[50px] bg-no-repeat bg-cover w-100 h-auto">
        <div className="vec-shape bg-no-repeat bg-contain">
          <p className="text-white text text-5xl text-center  g-font pt-20">
            Want to talk about plans?<br></br>Or have another question?
          </p>
          <p className="review-detail text-white text-xl text-center px-28 py-5">
            Your digital consultant will also be able to create kickstart
            campaigns that are best suited for your organization and within your
            budget.
          </p>
          <div className="flex justify-center pb-10">
            <button className="p-1 text-white border-2 border-white rounded-md">
              {" "}
              Call me Back
            </button>
            <button className="bg-saffron-500 p-1 rounded-md text-black ml-3 ">
              Call +1 833 641 2200
            </button>
          </div>
          {/* <StaticImage src="../images/secondshape.png" alt="second" /> */}
        </div>
      </div>
    </>
  )
}

export default Plan
