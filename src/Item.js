import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from './Products.json'
import $ from 'jquery'
import './style.min.css'
import Loader from './Loader';
const Item = () => {
    const [cartData, setData] = useState(null);
     const [loading,loadData]=useState()
    var data=localStorage.getItem("id");
    var json1=Product.filter(function(val){
        return(val.id==data)
    })
    useEffect(()=>{
        loadData(true);
        const timing=setTimeout(()=>{
            setData(json1);
            loadData(false);
        },1000);
    },[])
  return (
    <>
    <br></br>
    <br></br>
    <div className='container'>
      <div className='row'>
    {loading && <Loader/>}
    {!loading && json1.map((curElem)=>{
            return(
                <>
                <div className='col-lg-6'>
                <img src={curElem.img} className='img-fluid'></img>
                </div>
                <div className='col-lg-6'>
               <h2>{curElem.name}</h2>
               <br></br>
               <p style={{color:'grey',fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Feugiat in fermentum posuere urna. Amet nisl purus in mollis nunc. Tellus orci ac auctor augue mauris augue. Dolor morbi non arcu risus quis varius quam quisque id. Et malesuada fames ac turpis egestas sed tempus. Eget mi proin sed libero enim sed faucibus. Turpis massa sed elementum tempus. Congue eu consequat ac felis donec.</p>
               <br></br>
               <button className='btn btn-primary'>Add to cart</button>
               <button className='btn btn-primary mx-3'>Buy now</button>
                </div>
                  {loading && <Loader/>}
                </>
            )
        })
    }
    </div>
    </div>
    </>
  )
}

export default Item