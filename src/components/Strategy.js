import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BsCheck } from "react-icons/bs"

function Strategy() {
  return (
    <>
      <div className="bg-selago-500 lg:bg-selago-500 w-100 my-20">
        <div className="w-100 strategy-sec bg-top bg-no-repeat bg-cover w-100 h-32 "></div>
        <div className="strategy-heading h-auto lg:mx-28 px-6 mx-auto  mt-3 flex justify-center ">
          <div className="w-4 h-4 circle bg-salomie-500 rounded-full mx-16 mt-2"></div>
          <div>
            <p className=" hero-p1  text-rock-500 text-5xl font-semibold">
              Get the best strategie right just for you!
            </p>
          </div>
        </div>
        <div className="strategy lg:mx-32 px-6 flex flex-wrap justify-center mt-14 ">
          <div className="relative ">
            <StaticImage src="../images/Project2.png" className=" " />
          </div>
          <div className="w-100  mx-3 strategy-detail lg:w-2/5 	mt-2">
            <div className="flex strategy-inner-heading">
              <div className="bg-jagged-500 w-4 h-4 rounded-full border-2	mt-1 border-apple-500 ">
                <span className="text-apple-500   ">
                  <BsCheck className="relative right-[2px] bottom-[2px] text-2xl	" />
                </span>
              </div>
              <div className=" s-heading text-[28px] mb-1	 text-rock-500 font-semibold ml-3">
                01. Campaign Action Plan
              </div>
            </div>
            <p className="text-lynch-500 text-[20px]  mb-4 s-center ">
              Identify your company's needs and align them with your goals,
              allowing us to take the next step forward.
            </p>
            <div className="flex strategy-inner-heading">
              <div className="bg-jagged-500 w-4 h-4 rounded-full border-2	mt-1 border-apple-500 ">
                <span className="text-apple-500   ">
                  <BsCheck className="relative right-[2px] bottom-[2px] text-2xl	" />
                </span>
              </div>
              <div className=" s-heading  text-[28px]	mb-1 text-rock-500 font-semibold ml-3">
                02. Custom Campaign Creation
              </div>
            </div>
            <p className="text-lynch-500 text-[20px] mb-4 s-center ">
              Your SEO campaigns will be built from the ground up to meet the
              needs of your business, customers, and goals.
            </p>
            <div className="flex strategy-inner-heading">
              <div className="bg-jagged-500 w-4 h-4 rounded-full border-2	mt-1 border-apple-500 ">
                <span className="text-apple-500   ">
                  <BsCheck className="relative right-[2px] bottom-[2px] text-2xl	" />
                </span>
              </div>
              <div className=" s-heading text-[28px] mb-1	 text-rock-500 font-semibold ml-3">
                03. Launch, Optimize & Scale
              </div>
            </div>
            <p className="text-lynch-500 text-[20px] strategy-inner mb-4 s-center  ">
              High-quality content on a regular basis, scale your campaign, and
              take your brand to the next level!
            </p>
            <div className="flex mb-5 mt-4 strategy-btn">
              <button className="bg-indigo-400 p-1 rounded-md text-white font-semibold">
                See Plan
              </button>
              <button className="text-indigo-400 p-1 rounded-md ml-3 font-semibold  border-indigo-400 border-2">
                Get free consulation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Strategy
