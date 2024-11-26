import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";

import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

const ShopCategory = (props) => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => { 
    fetch(`${API_URL}/allproducts`) 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])
    
  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-products">
        {allproducts.map((item,i) => {
            if(props.category===item.category)
            {
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;
