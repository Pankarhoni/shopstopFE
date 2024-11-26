import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import { API_URL } from "../../../config"; // One more directory up, just in case


const RelatedProducts = ({ tag }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    fetch(`${API_URL}/allproducts`)  // Correct usage of template literals
      .then((res) => res.json())
      .then((data) => {
        // Filter products by the passed tag and limit to 8 items
        const filteredProducts = data.filter(item => item.tag === tag).slice(0, 8);
        setRelatedProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching related products:", error));
  }, [tag]); // Rerun when the tag changes
  
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
