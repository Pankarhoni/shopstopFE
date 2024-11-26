import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
const API_URL = process.env.REACT_APP_BACKEND_URL;

console.log("API_URL:", API_URL); // This should log the URL being used

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);
  const [loading, setLoading] = useState(true); // Step 1: Add a loading state

  useEffect(() => {
    // Start fetching the data
    setLoading(true); // Set loading to true when starting to fetch data
    fetch(`${API_URL}/newcollections`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`); // Handle HTTP errors
        }
        return response.json();
      })
      .then((data) => {
        setNewCollection(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching new collections:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {loading ? (
          // Step 4: Display loading message if loading is true
          <p>Loading products... (Server might be slow)</p>
        ) : (
          // Step 5: Display new collections when data is loaded
          newCollection.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image} // Base64 image should display correctly here
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewCollections;
