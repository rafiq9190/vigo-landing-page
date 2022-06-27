import React from "react"
import { StaticImage } from "gatsby-plugin-image"
function Review() {
  return (
    <>
      <div className="bg-chromeWhite-500 w-100 h-auto py-10 relative ">
        <p className="text-center text-5xl font-semibold text-rock-500 g-font pt-8">
          What people says about us
        </p>
        <div className="bg-white h-auto w-2/3 m-auto rounded-3xl my-10 p-5">
          <div className="flex">
            <span>
              <StaticImage src="../images/Ava.png" class="" />
            </span>
            <span className="ml-3 mt-1 ">
              <p className="text-rock-500 text-xl font-semibold">Sayed H.</p>
              <p className="text-lynch-500 text-base">Ben Sean International</p>
            </span>
          </div>
          <p className="text-shuttleGray-500 text-base pt-5">
            We have been a longtime client of Vigorant for almost all of the
            services they offer. These guys are great. Sometimes we have a last
            minute request for a marketing campaign or social media post and
            within hours they have it all taken care of. Especially when it
            comes to promote a newly listed property for sales, they are a big
            help to make the whole community aware and informed. Thanks again!
          </p>
        </div>
        <div className="review bg-bottom bg-no-repeat bg-cover w-100 h-16  relative top-10"></div>
      </div>
    </>
  )
}

export default Review
