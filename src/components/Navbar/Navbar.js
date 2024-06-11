import React,{useContext, useState} from 'react'
import { assets } from "../assets/assets"
import "./Navbar.css"
import { Link} from 'react-router-dom'
import { storeContext } from '../Context/StoreContext'

function Navbar({setlogin}) {
  const [menu, setmenu] = useState("home")
  const {getTotalAmount}=useContext(storeContext);

  
  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="" /></Link>
      <ul className='navbar-menu'>
        <Link to="/" className={menu==="home"?"active":""} onClick={()=>setmenu("home")}>Home</Link>
        <a href="#explore-menu" className={menu==="menu"? "active":""} onClick={()=>setmenu("menu")}>menu</a>
        <a href="#mobile-app" className={menu==="mobile-app"? "active":""} onClick={()=>setmenu("mobile-app")}> mobile-app</a>
        <a href='#footer' className={menu==="contact-us"? "active":""} onClick={()=>setmenu("contact-us")}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className='navbar-search-icon'>
     <Link to="/cart"><img src={assets.basket_icon} alt="basket-icon" />   </Link>  
          <div className={getTotalAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setlogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
