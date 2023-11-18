import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Auth from '../Auth/Auth'

const AppRoutes = () => (

    <Routes>
        <Route path='' element={<Auth/>} />
        <Route path='home' element={<Home/>} />
    </Routes>
  
    )

export default AppRoutes