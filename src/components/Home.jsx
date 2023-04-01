import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
const apilink="https://jsonplaceholder.typicode.com/users"
var [emp,changeEmp]=useState([])

React.useEffect(
    ()=>{
        axios.get(apilink)
        .then(
        (response)=>{
            //console.log(response.data)
            changeEmp(response.data)
        })
    },[]
)

  return (
    <div>
      <h2>EMPLOYEE DASHBOARD</h2>
      <table className="table">
    <thead>
      <tr>       
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>  
      </tr>
    </thead>
    <tbody>

    {emp.map(
        (value,index)=>{
          return  <tr>    
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            </tr>
        }
      )}
    
    </tbody>
  </table></div>
  )
}

export default Home