import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Example = ()=>{

    const [dat,setData]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
   
    const fetchData = async ()=>{
       let info = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.68852152883197&lng=83.23767364025116&restaurantId=508360&catalog_qa=undefined&submitAction=ENTER");
        let rest = await info.json();
        setData(rest.data);
    }
    if(dat.length===0)
        return <Shimmer/>

    let {name}=dat.cards[2].card.card.info;
    console.log(name);
    return (
        <div>
            <h1>{name}hi</h1>
        </div>
    );
}
export default Example;