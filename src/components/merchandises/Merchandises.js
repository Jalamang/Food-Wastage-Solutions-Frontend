import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '../productCard/ProductCard';
import "./Merchandises.scss"
const Merchandises = () => {
    const URL = 'http://localhost:3309/merchandises/'
    // const API = process.env.REACT_APP_API_URL;

    const [products, setProducts] = useState([]);

    // functions
    useEffect(() => {
        // reach out to the backend
        fetch(URL)
        .then(response => response.json()) // get our vendors
        .then(data => { 
            console.log(data)
            setProducts(data.vendors);// update our vendors hook with the new data
        })

    }, []); // empty array means run on mount
    console.log(products)
  return (
     <div className='merchandises'>
     {products.map(product => {
        
        return ( <ProductCard
             key={product.Merchan_id} product ={product}/>)
     })}
     </div>
  )
}

export default Merchandises