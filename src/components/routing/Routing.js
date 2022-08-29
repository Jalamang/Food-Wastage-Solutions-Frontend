import { Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Vendors from '../Vendors/Vendors'
import Home from '../../pages/home/Home'
import Merchandises from '../merchandises/Merchandises'
import Navbar from '../navbar/Navbar'
import ProductDetail from '../../pages/productDetail/ProductDetail'
import VendorDetails from '../../pages/vendorDetails/VendorDetails'
import NewVendor from '../newVendor/NewVendor'
import EditVendor from '../editVendor/EditVendor'
import { useSelector } from 'react-redux'
import NewProduct from '../newProduct/NewProduct'
import Login from '../loginLogout/Login'

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)
return <>{isAuth ? <Outlet /> : <Navigate to="/vendors/login" />}</>
}

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)
  return <>{!isAuth ? <Outlet /> : <Navigate to="/merchandises" />}</>
  }
  
const Routing = () => {
  const [loggedInValue, setLoggedInValue] = useState({
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({});

 console.log(loginData, loggedInValue)
  return (<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        
        <Route element={<PrivateRoutes />}>
        <Route path='/vendors' element={<Vendors />} /> 
        <Route path='/merchandises' element={<Merchandises  
        loggedInValue={loggedInValue}
        loginData={loginData} 
        setLoggedInValue={setLoggedInValue}/>} />
        <Route path='/merchandises/new' element={<NewProduct/>} />
        <Route path='/vendors/:id/edit' element={<EditVendor/>} />
        <Route path='/merchandises/:id/edit' element={<NewProduct/>} /> 
        <Route path='/merchandises/:id' element={<ProductDetail/>} />
        <Route path='/vendors/:id' element={<VendorDetails/>} /> 
        </Route>

        <Route element={<RestrictedRoutes />}>
        <Route path='/vendors/login' element={<Login 
         loggedInValue={loggedInValue}
         loginData={loginData} 
         setLoginData={setLoginData}
         setLoggedInValue={setLoggedInValue}/>} /> 
        <Route path='/vendors/new' element={<NewVendor/>} /> 
        </Route>
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing