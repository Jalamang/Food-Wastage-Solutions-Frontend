import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Vendors from '../Vendors/Vendors'
import Home from '../home/Home'
import Merchandises from '../merchandises/Merchandises'
import Navbar from '../navbar/Navbar'
import ProductDetail from '../../pages/productDetail/ProductDetail'

const Routing = () => {
  return (<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/vendors' element={<Vendors />} /> 
        <Route path='/merchandises' element={<Merchandises />} /> 
        <Route path='/merchandises/:id' element={<ProductDetail/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing