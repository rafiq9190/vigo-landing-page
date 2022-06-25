import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/Hero"
import WorkingWithUs from "../components/WorkingWithUs"
import Strategy from "../components/Strategy"
import Gather from "../components/Gather"
import Review from "../components/Review"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pricing from "../components/Pricing"
import Plan from "../components/Plan"
import Footer from "../components/Footer"
// import "../index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <WorkingWithUs />
    <Strategy />
    <Gather />
    <Pricing />
    <Review />
    <Plan />
  </Layout>
)

export default IndexPage
