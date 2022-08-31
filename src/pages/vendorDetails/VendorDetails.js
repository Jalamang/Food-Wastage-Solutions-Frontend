import React, {useState, useEffect} from 'react'
import "./VendorDetails.scss"
import { useLocation, useParams} from 'react-router-dom'

const VendorDetails = () => {

    let params = useParams();
    const { id } = params;
    const location = useLocation();
    const [vendor, setVendor] = useState({});
  
    useEffect(() => {
      if (location.state?.vendor) {
   
        setVendor(location.state?.vendor);
      } else {
        const singleVendor = `http://localhost:3309/vendors/${id}`;
      
        fetch(singleVendor)
          .then((response) => response.json())
          .then((data) => {
            setVendor(data);
          });
      }
   
    }, []);
  
  return (
    <> {Object.keys(vendor).length > 0 &&
      <div className="vendorDetail">
        <div className="vendorDetail__image">
         <img src={vendor.photo} alt={vendor.name}></img> 
          
        </div>
        <div className="vl"></div>
        <div className="vendorDetail__info">
          <div>
            {vendor.profile}
          </div>
          <div>{vendor.address}</div>
        </div>
      </div> }

      </>
  )
}

export default VendorDetails