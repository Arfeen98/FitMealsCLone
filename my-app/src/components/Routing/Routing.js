import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Login/Login'
import Reg from '../Registration/Registration'


export default function 
() {
  return (
   <Router>
       
       <Routes>
       
       <Route path="Login" element={<Login/>} />
       <Route path="registration" element={<Reg/>} />
       
       </Routes>
   </Router>
  )
}
