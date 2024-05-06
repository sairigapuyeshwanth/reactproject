import React from "react"

import CoursesCard from "./CourseCard"
import OnlineCourses from "./OnlineCourses"
import Back from "../common/back/back"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome