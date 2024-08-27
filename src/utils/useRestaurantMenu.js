import { useEffect,useState } from "react";
import { ITEMS_API } from "./constants";

const useRestaurantMenu = (restId)=>{

    const [menuInfo,setMenuInfo] = useState([]);

    useEffect(()=>{
        fetchRestaurantMenu();
    },[]);
    const fetchRestaurantMenu = async()=>{
        let data = await fetch(ITEMS_API+restId);
        let json = await data.json();
        setMenuInfo(json.data);
    }
    //console.log(menuInfo);
    return menuInfo;
}

export default useRestaurantMenu;

