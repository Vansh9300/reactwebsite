import React, { useEffect } from 'react'
import { useState } from 'react'
import Products from './Products.json'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const Product = () => {
  const [cart, setCart] = useState([]);
  var data=localStorage.getItem("category");
  var json= Products.filter(function(val){
    return (val.category==data)
  })
  const dataGet=(id)=>{
    localStorage.setItem('id',id)
  }
  useEffect(()=>{
    setCart([json]);
  })
  return (
    <>
    <br></br>
    <div className='container'>
      <div className='row'>
     {
    json.map((curElem)=>{
     return(
       <>
       <div className='col-lg-4' key={curElem.id}>
     <div className="card my-4" style={{width: '18rem',border:'none',boxShadow:'2px 4px 5px #d0cdcd'}}>
     <Link to="/item"><img src={curElem.img} id='image' className="card-img-top" alt="..." onClick={()=> dataGet(curElem.id)}  key={curElem.img} style={{height:'25vh',width:'60%',margin:'2px auto',display:'flex',objectFit:'fill'}}/></Link>
  <div className="card-body">
  <h5 className="card-title" style={{color:'grey'}}  key={curElem.name}>{curElem.name}</h5>
    <p className="card-text"  key={curElem.price}><b>Rs {curElem.price}</b></p>
  </div>
</div>
</div>
       </>
     )
    })
  }
  </div>
  </div>
    </>
  )
}

export default Product