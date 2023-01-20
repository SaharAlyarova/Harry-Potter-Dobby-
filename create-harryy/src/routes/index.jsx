import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailPage from '../pages/detail'
import HomePage from '../pages/home'
// import DetailPage from '../pages/home/detail'

const RouterCom = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/:imdbID' element={<DetailPage/>}/>
  </Routes>
  )
}

export default RouterCom