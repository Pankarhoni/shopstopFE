import React,{useEffect,useState} from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import { API_URL } from "../../../config"; // One more directory up, just in case


const NewCollections = (props) => {
  const [new_collection,setNew_collection]=useState([]);

  useEffect(()=>{
    fetch(`${API_URL}/newcollections`)
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data))
  },[])
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {props.data.map((item,i)=>{
                return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            })}
      </div>
    </div>
  )
}

export default NewCollections
