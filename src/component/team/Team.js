import React from "react"

import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/awrapper"
import "../about/about.css"
import Back from "../common/back/back"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team