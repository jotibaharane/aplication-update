import React, { useEffect, useState } from 'react'
import "./IndexR.css"
import Home from './Home'
import AddCourse from './AddCourse'
import ViewCourse from './ViewCourse'
import ViewContent from './ViewContent'
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

function IndexR() {
  const [data,setData]=useState([])
  const courseData=(formData)=>{
    if (formData.id&&formData.title&&formData.description) {
     fetch("http://localhost:3000/course",{
    method:"post",
    headers:{
      "content-type":"application/JSON"
    },
    body:JSON.stringify(formData)
  }).then(Response=>{
    getData()
  }) 
    }else{
      alert("please fill all details")
    }
  }
  const getData=()=>{
    fetch("http://localhost:3000/course").then(
      Response=>{
       return Response.json()
      }).then(data=>{
        setData(data)
      }) 
  }
  useEffect(()=>{
    getData()
  },[])
  const deleteData=(D_id)=>{
    fetch(`http://localhost:3000/course/${D_id}`,{
      method:"delete"
    }).then(
      Response=>{
        getData()
      })
  }
  // const updateData=(D_id)=>{
  //   fetch(`http://localhost:3000/course/${D_id}`,{
  //       method: 'PUT',
  //       body: JSON.stringify(D_id),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       })
  // }
  return (
    <Router>
    <div className='index-main'>
      <div className="index-title">
       <h1> Well-Come To Course Application</h1>
      </div>
      <div className="index-sub">
        <div className="index-navebar">
            <ul>
           <li><Link to={"/"} >Home</Link></li>
           <li><Link to={"/add"} >Add Course</Link></li>
           <li><Link to={"/view"}>View Course</Link></li>
           <li><Link to={"/about"} >About</Link></li>
           <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
        <div className="index-main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/view" element={<ViewCourse>
          {
            data.map((item)=>{
              return <ViewContent key={item.id} item={item} delete={deleteData}/>
            })
          }
          </ViewCourse>} />
          <Route path="/add" element={<AddCourse formData={courseData}/>} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
        </div>
      </div>
    </div>
     </Router>
    
    
  )
}

export default IndexR