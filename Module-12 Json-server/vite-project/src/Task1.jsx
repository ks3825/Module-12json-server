import React, { useEffect, useState } from 'react'

const Task1 = () => {
    const [data,setData]= useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
        .then(json=>setData(json))
    })
  return (
    <div>
      <h3>Fetch data api</h3>
      <table border={'2'}>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>


        </tr>
        {
            data.map((i)=>{
                return(
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.price}</td>

                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Task1
