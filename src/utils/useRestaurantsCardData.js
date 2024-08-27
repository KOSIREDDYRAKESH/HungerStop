import { useState,useEffect } from "react";

const useRestaurantsCardData = ()=>{

    const[filteredRestro,setFilteredRestro] = useState([]);

    useEffect(()=>{
        fetchdata();
    },[]);

   const fetchdata = async()=>{
       let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.68852152883197&lng=83.23767364025116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       let json = await data.json();
       let restList = json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
       setFilteredRestro(restList);
       
   }
   //console.log(listOfResturant);
   
    return filteredRestro;
}

export default useRestaurantsCardData;