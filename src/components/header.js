import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"
const Header = () => (
  <header>
    <div className=" lg:mx-20 px-6 mx-auto">
      <div className=" lg:flex flex-row flex-wrap justify-between mt-3 md:flex flex-row flex-wrap justify-between mt-3  block text-center mb-4">
        <div className="">
          <StaticImage src="../images/logotype.svg" alt="A dinosaur" />
        </div>
        <div className="  lg:flex justify-around block ">
          <p className="font-Inter-400 text-lynch-500 pt-1 pr-1 mb-1 text-xl ">
            Got a question? just call us at +1 833 641 2200
          </p>
          <button className="bg-indigo-400 p-1 rounded-md text-white  ">
            Get free consulation
          </button>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
