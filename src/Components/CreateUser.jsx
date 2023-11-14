import React, { useState } from 'react'
import style from "./style.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUser = () => {
  let [name, setName] = useState("")
  let [company, setCompany] = useState("")
  let [salary, setSalary] = useState("")

  let navigate = useNavigate()

  let nameData = (x) => {
    setName(x.target.value)
  }

  let companyData = (x) => {
    setCompany(x.target.value)
  }

  let salaryData = (x) => {
    setSalary(x.target.value)
  }

  let formhandle = (x) => {
    x.preventDefault()
    let payload = {
      eName: name,
      eCompany: company,
      eSalary: salary
    }
    axios.post("http://localhost:3000/employee", payload)
      .then(() => { console.log("Data has Been stored in server") })
    navigate("/user")
  }
  return (
    <div id={style.bodystyle}>
      <form>
        <h1>Create Employee Details</h1>
        <label>Name</label>
        <input type="text" value={name} onChange={nameData} /> <br />
        <label>Company</label>
        <input type="text" value={company} onChange={companyData} /> <br />
        <label>Salary</label>
        <input type="text" value={salary} onChange={salaryData} /> <br />
        <button onClick={formhandle}>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser
