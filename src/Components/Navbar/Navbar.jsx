import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>ShopNex</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to='/men'>Men</Link>{menu=="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to='/women'>Women</Link>{menu=="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img  className="cart-img" src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
