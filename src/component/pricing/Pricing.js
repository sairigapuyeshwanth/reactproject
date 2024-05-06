import React from "react"

import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import Back from "../common/back/back"

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing