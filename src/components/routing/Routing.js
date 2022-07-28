import { Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router-dom'
import React from 'react'
import Vendors from '../Vendors/Vendors'
import Home from '../../pages/home/Home'
import Merchandises from '../merchandises/Merchandises'
import Navbar from '../navbar/Navbar'
import ProductDetail from '../../pages/productDetail/ProductDetail'
import VendorDetails from '../../pages/vendorDetails/VendorDetails'
import NewVendor from '../newVendor/NewVendor'
import EditVendor from '../editVendor/EditVendor'
import NewProduct from '../newProduct/NewProduct'
import Login from '../loginLogout/Login'

const PrivateRoutes = () => {
const isAuth = false
return <>{isAuth ? <Outlet /> : <Navigate to="/vendors/login" />}</>
}

const RestrictedRoutes = () => {
  const isAuth = false
  return <>{!isAuth ? <Outlet /> : <Navigate to="/vendors" />}</>
  }
const Routing = () => {
  return (<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        
        <Route element={<PrivateRoutes />}>
        <Route path='/vendors' element={<Vendors />} /> 
        <Route path='/merchandises' element={<Merchandises />} />
        <Route path='/merchandises/new' element={<NewProduct/>} />  
        </Route>
        <Route element={<RestrictedRoutes />}>
        <Route path='/merchandises/:id' element={<ProductDetail/>} /> 
        <Route path='/merchandises/:id/edit' element={<NewProduct/>} /> 
        <Route path='/vendors/:id' element={<VendorDetails/>} /> 
        <Route path='/vendors/:id/edit' element={<EditVendor/>} /> 
        <Route path='/vendors/new' element={<NewVendor/>} /> 
        <Route path='/vendors/login' element={<Login/>} /> 
        </Route>
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing