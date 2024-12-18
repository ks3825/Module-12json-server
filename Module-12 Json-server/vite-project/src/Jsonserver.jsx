import React, { useState } from 'react'
import axios from 'axios'

const Jsonserver = () => {
  const [data,setData] = useState({
    name:"",
    age:"",
    mobileno:""
  })
  const [alldata,setAllData] = useState([])
  const saveData = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/users",data)
    .then((res)=>console.log(res))
    
  }
  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} /><br></br>
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" onChange={handleChange} /><br></br>
        <label htmlFor="">Mobile no:</label>
        <input type="number" name="mobileno" id="mobileno" onChange={handleChange} /><br></br>

        <input type="submit" name="save" id="save" value="saveData" />

      </form>
    </div>
  )
}

export default Jsonserver
