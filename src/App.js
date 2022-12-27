
import axios from "axios";
import { useState, useEffect } from 'react';
import React from "react"


function App() {
 
 const [message,setMessage]=useState("");
 useEffect(()=>{
  fetch("http://localhost:8080/message")
  .then((res)=>res.json())
  .then((data)=>setMessage(data.message))
 },[])

const [formData,setFormData]=useState("");
const handleChange=event=>{
  setFormData(event.target.value)
 };
const eventHandler=event=>{
  event.preventDefault();
  setFormData();
  console.log(formData);
  try{
    axios.post("http://localhost:8080/openurl",{
      headers:{'Content-Type':'multipart/form-data' },
      body:formData,
    });
  }catch(err){
    console.log(err);
  }
};

const [data,setData]=useState("");
useEffect(()=>{
 fetch("http://localhost:8080/openurl")
 .then((res)=>res.json())
 .then((data)=>setData(data.data))
},[])

  return (
   <>
  
   <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h5 className="text-white h4">Collapsed content</h5>
      <span className="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
<form className="container" method="post" onSubmit={eventHandler} style={{marginTop:"20px"}}>
<div>Enter Link</div>
<div className="input-group mb-3">
 
  <input type="text" value={formData} onChange={handleChange} className="form-control" placeholder="Enter link here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
  </div>
</div>
</form>
 
<h1>{message}</h1>
<div className="container">
<p>{!data ? "Loading..." : data}</p>
</div>
</>
  );
}

export default App;
