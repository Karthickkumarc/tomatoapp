import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from "../assets/assets"
function ExploreMenu({category,setcategory}) {
    return (
        <div className='explore-menu' id="explore-menu">
            <h1>explore our menu</h1>
            <p className='explore-menu-text'> choos from a diverse menu featurinh a delectable array of dishesh our mission is to statisfy your craving and eleveate your dining experience one delicious meal at a time </p>
            <div className="explore-menu-list">
             {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev => prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
                       <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=
                       "menu_image" />
                       <p>{item.menu_name}</p>
                    </div>
                )
             })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
