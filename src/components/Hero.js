import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Hero() {
  return (
    <>
      <div className="bg-sky-100 w-11/12 z-0 rounded-[100px] min-h-max  lg:bg-sky-100 w-11/12 min-h-max m-auto ">
        {/* <StaticImage
          src="../images/hero-rounder.png"
          alt="rounder"
          className="relative z-40"
        /> */}
        <div className="lg:grid grid-rows-1 grid-flow-col  relative gap-3 ">
          <div className=" px-1 py-16  ">
            <p className=" hero-p1 text-center px-6 text-rock-500 font-semibold  lg:text-left text-6xl text-semibold  px-6  ">
              Make your website load faster, optmize your images and boost your
              seo.
            </p>
            <p className=" hero-p2 text-center lg:text-left text-lynch-500 text-xl mb-2 px-6 py-2 ">
              Increase the number of visitors to your website by appearing
              organically at the top of the major search engines results pages.
            </p>
            <div className="bg-orange-400 w-5 h-5 rounded-full absolute inset-y-72 left-[-13px]  "></div>

            <div className="  heroBtn lg:px-6 py-3 ">
              <button className="bg-indigo-400 p-1 rounded-md text-white font-semibold ">
                Get 50% off SEO Plan
              </button>
              <button className="herosec-btn  lg:text-indigo-400 p-1 ml-3 font-semibold rounded-md border-indigo-400 border-2  ">
                Get free consulation
              </button>
            </div>
          </div>
          <div className="py-3 text-center">
            <StaticImage src="../images/hero.svg" alt="A dinosaur" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Hero
