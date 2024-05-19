// import React, { useContext, useState, useEffect } from 'react';
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import cart_icon_dark from '../Assets/cart_icon_dark.png';
// import moonIcon from '../Assets/dark_mode.png';
// import sunIcon from '../Assets/light_mode.png';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';

// const Navbar = () => {
//     const { getTotalCartItems, theme, setTheme } = useContext(ShopContext);
//     const [icon, setIcon] = useState(theme === 'dark' ? cart_icon_dark : cart_icon);
//     const [menu, setMenu] = useState("shop");

//     useEffect(() => {
//         setIcon(theme === 'dark' ? cart_icon_dark : cart_icon);
//         const dnav = document.getElementById("nav");
//         if (theme === 'dark') {
//             dnav.classList.add("dark");
//         } else {
//             dnav.classList.remove("dark");
//         }
//     }, [theme]);

//     const toggle = () => {
//         setTheme(theme === "dark" ? "light" : "dark");
//     };

//     return (
//         <div className={`navbar ${theme}`} id="nav">
//             <div className="nav-logo">
//                 <Link className="nav-logo-link" to="/">
//                     <img src={logo} alt="ShopNex Logo" style={{ marginRight: '10px' }} />
//                     <p className={`pnav_${theme}`}>ShopNex</p>
//                 </Link>
//             </div>
//             <ul className="nav-menu">
//                 <li onClick={() => setMenu("shop")}>
//                     <Link to='/'>Shop</Link>
//                     {menu === "shop" && <hr />}
//                 </li>
//                 <li onClick={() => setMenu("men")}>
//                     <Link to='/men'>Men</Link>
//                     {menu === "men" && <hr />}
//                 </li>
//                 <li onClick={() => setMenu("women")}>
//                     <Link to='/women'>Women</Link>
//                     {menu === "women" && <hr />}
//                 </li>
//                 <li onClick={() => setMenu("kids")}>
//                     <Link to='/kids'>Kids</Link>
//                     {menu === "kids" && <hr />}
//                 </li>
//                 <li onClick={() => setMenu("categories")}>
//                     <Link to='/categories'>Categories</Link>
//                     {menu === "categories" && <hr />}
//                 </li>
//             </ul>
//             <div className="nav-login-cart">
//                 <Link to='/login'><button className='log_btn'>Login</button></Link>
//                 <Link to='/cart'><img src={icon} alt="Cart Icon" className='cart' /></Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div>
//                 <div className='dark_btn'>
//                     <button onClick={toggle} className={`toggle_${theme} change`}>
//                         {theme === 'light' ? <img src={sunIcon} alt="Sun Icon" /> : <img src={moonIcon} alt="Moon Icon" />}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar;






import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import cart_icon from '../Assets/cart_icon.png';
import cart_icon_dark from '../Assets/cart_icon_dark.png';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
    const [icon, setIcon] = useState(cart_icon);
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems, theme, setTheme } = useContext(ShopContext);
    const [activeMenu, setActiveMenu] = useState("shop");

    const toggle = () => {
        if (theme === "dark") {
            setTheme("light");
            setIcon(cart_icon_dark);
            const dnav = document.getElementById("nav");
            dnav.classList.add("dark");
        } else {
            setTheme("dark");
            setIcon(cart_icon);
            const dnav = document.getElementById("nav");
            dnav.classList.remove("dark");
        }
    };
  return (
    <div className={`navbar`} id="nav">
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/">
          <img src={require('../Assets/logo.png')} alt="ShopNex Logo" style={{ marginRight: '10px' }} />
          <p className={`pnav_${theme}`}>ShopNex</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setActiveMenu("shop") }}>
          <Link to='/'>Shop</Link>
          {activeMenu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setActiveMenu("men") }}>
          <Link to='/men'>Men</Link>
          {activeMenu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setActiveMenu("women") }}>
          <Link to='/women'>Women</Link>
          {activeMenu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setActiveMenu("kids") }}>
          <Link to='/kids'>Kids</Link>
          {activeMenu === "kids" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setActiveMenu("categories") }}>
          <Link to='/categories'>Categories</Link>
          {activeMenu === "categories" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setActiveMenu("contact") }}>
          <Link to='/contact'>Contact Us</Link>
          {activeMenu === "contact" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button className='log_btn'>Login</button></Link>
        <Link to='/cart'><img src={icon} alt="Cart Icon" className='cart' /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <div className='dark_btn'>
          <button onClick={toggle} className={`toggle_${theme} change`}>
            {theme === 'light' ? <img src={require('../Assets/light_mode.png')} alt="Sun Icon" /> : <img src={require('../Assets/dark_mode.png')} alt="Moon Icon" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

