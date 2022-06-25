import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Footer() {
  return (
    <div className=" footer-d mx-64 px-12 bg-white  h-auto my-24">
      <div className="flex flex-wrap align-middle">
        <span className=" ">
          <StaticImage src="../images/facebook.png" className="my-6" />
          <StaticImage src="../images/Line.png" className="mx-4" />
        </span>
        <span className="h-auto">
          <StaticImage src="../images/google.png" className="my-5" />
          <StaticImage src="../images/Line.png" className="mx-4" />
        </span>
        <span className="h-auto">
          <StaticImage src="../images/Linked.png" className="my-6" />
          <StaticImage src="../images/Line.png" class="mx-4" />
        </span>
        <span className="h-auto">
          <StaticImage src="../images/Microsoft.png" className="my-6" />
          <StaticImage src="../images/Line.png" class="mx-4" />
        </span>
        <span className="h-auto">
          <StaticImage src="../images/yelp.png" className="my-6" />
          <StaticImage src="../images/Line.png" class="mx-4" />
        </span>
        <span className="h-auto">
          <StaticImage src="../images/NextHealth.png" className="my-5" />
        </span>
      </div>
    </div>
  )
}

export default Footer
