import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
       <Link to='/'>Home</Link>
        <Link to='/cartitems'>CART ITEMS</Link>  
    </div>
  )
}
