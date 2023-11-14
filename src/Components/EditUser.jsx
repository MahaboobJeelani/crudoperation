import React, { useEffect } from 'react'
import { useState } from 'react'
import style from "./style.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  let [name, setName] = useState("")
  let [company, setCompany] = useState("")
  let [salary, setSalary] = useState("")

  let obj = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/employee/${obj.num}`)
      .then((res) => {
        setName(res.data.eName);
        setCompany(res.data.eCompany);
        setSalary(res.data.eSalary)
      })
  }, [])

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
    axios.put(`http://localhost:3000/employee/${obj.num}`, payload)
      .then(() => { console.log("Data Submited"); })
      .catch(() => { console.log("Error"); })
    navigate("/user")
  }
  return (
    <div id={style.bodystyle}>
      <form>
        <h1>Edit Employee Details</h1>
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

export default EditUser
