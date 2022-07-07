import React from 'react'
import { useState, useEffect } from 'react';
import VendorCard from '../vendorCard/VendorCard';
import "./Vendors.scss"
const Vendors = () => {
    const URL = 'http://localhost:3309/vendors/'
    // const API = process.env.REACT_APP_API_URL;

    const [vendors, setVendors] = useState([]);

    // functions
    useEffect(() => {
        // reach out to the backend
        fetch(URL)
        .then(response => response.json()) // get our vendors
        .then(data => { 
            setVendors(data.vendors);// update our vendors hook with the new data
        })
       
        

    }, []); // empty array means run on mount
    
  return (
     <div className='vendors'>
     {vendors.map(vendor => {
        return ( <VendorCard key={vendor.vendor_id} vendor ={vendor}/>)
     })}
     </div>
  )
}

export default Vendors