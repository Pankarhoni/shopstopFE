import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';

const RelatedProducts = ({ tag }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data. Replace this with your actual data fetching logic.
    fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        // Filter products by the passed tag and limit to 4 items
        const filteredProducts = data.filter(item => item.tag === tag).slice(0, 8);
        setRelatedProducts(filteredProducts);
      });
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
