import React,{useState,useEffect} from "react";
import "./AddCourse.css"
function AddCourse(props) {
  const [id,setId]=useState("")
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
const submitData=(e)=>{
  e.preventDefault();
  const subData={
    "id":id,
    "title" :title,
    "description":desc
  }
  console.log(subData);
  props.formData(subData) 
}

const clearField=()=>{
  setId("")
  setDesc("")
  setTitle("")
}
  return (
    <div className="add-course-main">
      <form onSubmit={submitData}>
        <h1>Fill Course Details</h1>
        <div className="add-course-content">
          <label>Course Id:</label>
          <input type="number" placeholder="Enter Course Id Here" value={id} onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div className="add-course-content">
          <label>Course Title:</label>
          <input type="text" placeholder="Enter Course Title Here" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="add-course-content">
          <label>Course Description:</label><br />
          <textarea cols="30" rows="10" placeholder="Enter Text Description" value={desc} onChange={(e)=>setDesc(e.target.value)} />
        </div>
        <button type="submit">Add</button>
        <button type="reset" onClick={clearField}>Clear</button>
      </form>
    </div>
  );
}

export default AddCourse;
