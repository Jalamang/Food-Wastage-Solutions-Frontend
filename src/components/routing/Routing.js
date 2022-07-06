import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Vendors from '../Vendors/Vendors'
import Home from '../home/Home'
import Merchandises from '../merchandises/Merchandises'

const Routing = () => {
  return (<>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/vendors' element={<Vendors />} /> 
        <Route path='/merchandises' element={<Merchandises />} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing