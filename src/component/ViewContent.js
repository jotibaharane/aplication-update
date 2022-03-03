import React from 'react'

function ViewContent(props) {
    const {item,delete:deleteData,update:updateData }=props;
  return (
    <div className='view-course-content'>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <button onClick={()=>deleteData(item.id)}>Delete</button>
            <button onClick={()=>updateData(item.id)}>Update</button>
        </div>
  )
}

export default ViewContent