import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './view/pages/home/Home'
import Register from './view/pages/register/Register'
import Login from './view/pages/login/Login'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
