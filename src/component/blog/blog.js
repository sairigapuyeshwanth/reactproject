import React from "react"


import "./blog.css"
import Back from "../common/back/back"
import BlogCard from "./blogcard"

const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard/>
        </div>
      </section>
    </>
  )
}

export default Blog