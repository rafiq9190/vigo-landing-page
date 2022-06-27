import React from "react"
import { BsCheck } from "react-icons/bs"
import { TiTimes } from "react-icons/ti"
import { StaticImage } from "gatsby-plugin-image"

function Pricing() {
  return (
    <div className="bg-selago-500 lg:bg-selago-500 mt-20 h-auto">
      <p className="text-center text-5xl text-rock-500 g-font pt-20">
        Plans which turn your bussines to the new level
      </p>
      <p className="text-center text-lynch-500  text-xl mt-3">
        We made best plans right just for
      </p>
      <div className="flex flex-wrap   justify-center  pt-10 pb-20 ">
        <div className=" bg-white card-resize  lg:bg-white w-1/4 py-5 px-5 mr-6 rounded-3xl">
          <div className="flex justify-between">
            <p className="text-xl lg:text-2xl text-rock-500	">Basic</p>
            <div className="text-apple-500 bg-jagged-500 p-1 rounded-md ">
              <p className="text-md lg:text-semibold">Save 50%</p>
            </div>
          </div>
          <p className="text-lynch-500 text-xl mt-3">
            <del>$10</del>
          </p>
          <p>
            <span className="price-size lg:text-rock-500 text-6xl">$5</span>
            <span className="text-lynch-500 text-xl text-osloGray-500">
              /month
            </span>
          </p>
          <p className="text-base my-5 text-osloGray-500 text-semibold">
            Beautifully simple project planning
          </p>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">24/7 Support</p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">Instant Backup</p>
          </div>
          <div className="flex my-3">
            <div className="   ">
              <TiTimes className="relative right-[2px] bottom-[2px] text-2xl mt-2 text-osloGray-300 text-semibold	" />
            </div>
            <p className="ml-5 mt-1 text-xl text-semibold text-osloGray-300">
              10 GB Storage
            </p>
          </div>
          <div className="flex my-3">
            <div className="   ">
              <TiTimes className="relative right-[2px] bottom-[2px] text-2xl mt-2 text-osloGray-300 text-semibold	" />
            </div>
            <p className="ml-5 mt-1 text-xl text-semibold text-osloGray-300">
              Unlimited Bandwith
            </p>
          </div>
          <div className="flex my-3">
            <div className="   ">
              <TiTimes className="relative right-[2px] bottom-[2px] text-2xl mt-2 text-osloGray-300 text-semibold	" />
            </div>
            <p className="ml-5 mt-1 text-xl text-semibold text-osloGray-300">
              Unlimited Bandwith
            </p>
          </div>
          <div className="flex my-3">
            <div className="   ">
              <TiTimes className="relative right-[2px] bottom-[2px] text-2xl mt-2 text-osloGray-300 text-semibold	" />
            </div>
            <p className="ml-5 mt-1 text-xl text-semibold text-osloGray-300">
              Unlimited Bandwith
            </p>
          </div>
          <button className="bg-white text-blueRibbon-500 border-2 block w-full font-semibold border-indigo-400 p-2 rounded-md ">
            Get 50% Off Premium Plan
          </button>
        </div>
        {/* //other card */}
        <div className=" card-resize bg-white lg:bg-white w-1/4 py-5 px-5 mr-6 rounded-3xl">
          <div className="flex justify-between">
            <p className="text-xl lg:text-2xl text-rock-500	">Premium</p>
            <div className="text-apple-500 bg-jagged-500 p-1 rounded-md ">
              <p className="text-md lg:text-semibold">Save 50%</p>
            </div>
          </div>
          <p className="text-lynch-500 text-xl mt-3">
            <del>$20</del>
          </p>
          <p>
            <span className=" price-size  lg:text-rock-500 text-6xl">$10</span>
            <span className="text-lynch-500 text-xl text-osloGray-500">
              /month
            </span>
          </p>
          <p className="text-base my-5 text-osloGray-500 text-semibold">
            Beautifully simple project planning
          </p>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">24/7 Support</p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">Instant Backup</p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">10 GB Storage</p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">
              Unlimited Bandwith
            </p>
          </div>
          <div className="flex my-3">
            <div className="   ">
              <TiTimes className="relative right-[2px] bottom-[2px] text-2xl mt-2 text-osloGray-300 text-semibold	" />
            </div>
            <p className="ml-5 mt-1 text-xl text-semibold text-osloGray-300">
              Unlimited Bandwith
            </p>
          </div>
          <div className="flex my-3">
            <div className="   ">
              <TiTimes className="relative right-[2px] bottom-[2px] text-2xl mt-2 text-osloGray-300 text-semibold	" />
            </div>
            <p className="ml-5 mt-1 text-xl text-semibold text-osloGray-300">
              Unlimited Bandwith
            </p>
          </div>
          <button className="bg-blueRibbon-500 text-white border-2 block w-full font-semibold border-indigo-400 p-2 rounded-md ">
            Get 50% Off Premium Plan
          </button>
        </div>
        {/* thrid card */}
        <div className="card-resize bg-white lg:bg-white w-1/4 py-5 px-5  rounded-3xl">
          <div className="flex justify-between">
            <p className="text-xl lg:text-2xl text-rock-500	">Business</p>
            <div className="text-apple-500 bg-jagged-500 p-1 rounded-md ">
              <p className="text-md lg:text-semibold">Save 50%</p>
            </div>
          </div>
          <p className="text-lynch-500 text-xl mt-3">
            <del>$50</del>
          </p>
          <p>
            <span className="price-size lg:text-rock-500 text-6xl">$100</span>
            <span className="text-lynch-500 text-xl text-osloGray-500">
              /month
            </span>
          </p>
          <p className="text-base my-5 text-osloGray-500 text-semibold">
            Beautifully simple project planning
          </p>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">24/7 Support</p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">Instant Backup</p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">10 GB Storage</p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">
              Unlimited Bandwith
            </p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">
              Unlimited Bandwith
            </p>
          </div>
          <div className="flex my-3">
            <div className="bg-blueRibbon-500 w-4 h-4 rounded-full border-2	mt-1  ">
              <span className="text-white   ">
                <BsCheck className="relative right-[2px] bottom-[2px] text-2xl text-semibold	" />
              </span>
            </div>
            <p className="ml-5 mt-1 text-xl text-rock-500">
              Unlimited Bandwith
            </p>
          </div>

          <button className="bg-white text-blueRibbon-500 border-2 block w-full font-semibold border-indigo-400 p-2 rounded-md ">
            Get 50% Off Premium Plan
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
