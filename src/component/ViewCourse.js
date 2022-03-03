import React from 'react'
import "./ViewCourse.css"
function ViewCourse(props) {
  return (
    <div className='view-course'>
        <h1>All Courses</h1>
        <h4>List of all courses are as follow :-</h4>
        {props.children}
    </div>
  )
}

export default ViewCourse