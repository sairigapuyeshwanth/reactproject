import React from "react"

import Hblog from "./Hblog"
import HAbout from "./Habout"
import Hero from "./hero/Hero"
 import Hprice from "./Hprice"

import AboutCard from "../about/aboutcard"
import Testimonal from "./testimonal/testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard/>
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home