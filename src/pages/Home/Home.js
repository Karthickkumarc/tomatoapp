import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import ExploreMenu from '../../components/Exploremenu/ExploreMenu'

import AppDownload from "../../components/AppDownload/AppDownload"


function Home() {
    const [category,setcategory]=useState("All")
  return (
    <div>
     <Header/>
     <ExploreMenu  category={category} setcategory={setcategory}/>
     <FoodDisplay category={category}/>
     <AppDownload/>
   
    </div>
  )
}

export default Home;
