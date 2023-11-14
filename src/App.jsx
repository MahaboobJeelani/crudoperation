import React from 'react'
import Home from "./Components/Home"
import CreateUser from "./Components/CreateUser"
import User from "./Components/User"
import EditUser from "./Components/EditUser"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route element={<CreateUser />} path='/' />
          <Route element={<User />} path='/user' />
          <Route element={<EditUser />} path='/edit/:num' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
