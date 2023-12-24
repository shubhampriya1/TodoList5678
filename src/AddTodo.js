import React, { useState } from 'react'

const AddTodo = (props) => {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  const submit=(e)=>{
      e.preventDefault();
      if(!title||!desc){
        alert("Title or description cannot be blank")
      }
      props.addTodo(title,desc);
  } 

  return (
    <div className="container">
        <h3>AddTodo</h3>
    <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title" class="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
    class="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Todo Description</label>
    <input type="text" value={desc}  onChange={(e)=>{setDesc(e.target.value)}}
    class="form-control" id="text"/>
  </div>
  
  <button type="submit" class="btn btn-success">AddTodo</button>
</form>
</div>
  )
  
}

export default AddTodo
