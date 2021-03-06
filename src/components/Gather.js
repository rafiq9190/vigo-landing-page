import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Gather() {
  return (
    <div className="gather-bg  lg:mx-52 px-12  w-100 h-auto rounded-[50px]">
      <div className="flex flex-wrap">
        <div className=" img-resize  lg: w-1/2 my-5">
          <span className=" lg:w-auto ">
            <StaticImage src="../images/ranking1.png" />
          </span>
          <span className="  lg:w-auto text-center">
            <StaticImage src="../images/ranking2.png" />
          </span>
        </div>
        <div className=" w-100  lg:w-1/2 text-left my-16 strategy-detail">
          <p className=" g-font hero-p1 lg:text-5xl font-medium text-rock-500  py-8 ">
            We gather high-ranking keywords used by your target audience
          </p>
          <p className=" gg-font lg:text-xl  text-rock-500 hero-p1">
            We keep our customers informed in real-time about what is important
            to them. We communicate clearly, because in the world of marketing,
            honesty wins!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gather
