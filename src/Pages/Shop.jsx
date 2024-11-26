import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
const API_URL = process.env.REACT_APP_BACKEND_URL;
console.log("API_URL:", API_URL); // This should log the URL being used

const Shop = () => {

  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch(`${API_URL}/newcollections`) 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <div>
      <Hero/>
      <NewCollections data={newcollection}/>
    </div>
  )
}

export default Shop
