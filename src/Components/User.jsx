import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  let [content, setContent] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/employee")
      .then((responce) => { setContent(responce.data); })
      .catch(() => { console.log("Error"); })
  })

  let deleteUser = (x) => {
    console.log(x);
    axios.delete(`http://localhost:3000/employee/${x}`)
    window.location.assign("/user")
    window.location.assign("/user")
  }

  return (
    <table>
      {content.map((x) => {
        return (
          <section key={x.id}>
            <div></div>
            <tr>
              <td>Employee ID</td>
              <td>:{x.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>:{x.eName}</td>
            </tr>
            <tr>
              <td>Comapny</td>
              <td>:{x.eCompany}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>:{x.eSalary}</td>
            </tr>
            <tr>
              <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
              <td><button onClick={() => { deleteUser(x.id) }}>Delete</button></td>
            </tr>
          </section>
        )
      })}
    </table>
  )
}

export default User
