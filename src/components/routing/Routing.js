import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Vendors from '../Vendors/Vendors'
import Home from '../../pages/home/Home'
import Merchandises from '../merchandises/Merchandises'
import Navbar from '../navbar/Navbar'
import ProductDetail from '../../pages/productDetail/ProductDetail'
import VendorDetails from '../../pages/vendorDetails/VendorDetails'

const Routing = () => {
  return (<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='/vendors' element={<Vendors />} /> 
        <Route path='/merchandises' element={<Merchandises />} /> 
        <Route path='/merchandises/:id' element={<ProductDetail/>} /> 
        <Route path='/vendors/:id' element={<VendorDetails/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing