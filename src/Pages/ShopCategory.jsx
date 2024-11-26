import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ShopCategory = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Step 1: Add a loading state

  useEffect(() => {
    // Start fetching the data
    setLoading(true); // Set loading to true when starting to fetch data
    fetch(`${API_URL}/allproducts`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`); // Handle HTTP errors
        }
        return res.json();
      })
      .then((data) => {
        setAllProducts(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-products">
        {loading ? (
          // Step 4: Display loading message if loading is true
          <p>Loading products... (Server might be slow)</p>
        ) : (
          // Step 5: Display products when data is loaded
          allProducts
            .filter((item) => props.category === item.category) // Filter products by category
            .map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
        )}
      </div>
      <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;
