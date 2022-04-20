import React from 'react'
import Loading from './loader5.gif'
const Loader = () => {
  return (
    <div className='loader'>
    <img className='img-fluid' src={Loading} id='loader'></img>
    </div>
  )
}

export default Loader