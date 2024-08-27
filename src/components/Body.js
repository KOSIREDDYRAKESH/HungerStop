import RestroCard, { RestaurantsVegCard } from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfResturant, setSortList] = useState([]);

    const [filteredRestro, setFilteredRestro] = useState([]);

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    const RestaurantsVegTagCard = RestaurantsVegCard(RestroCard);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.68852152883197&lng=83.23767364025116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        //optional chaining (?)
        let jsondata = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (jsondata === undefined)
            jsondata = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setSortList(jsondata);
        setFilteredRestro(jsondata);
        //console.log(json.data.cards)
    }
    //console.log(listOfResturant)
    //conditional Rendering shimmer
    if (listOfResturant.length === 0) {
        return <Shimmer />
    }

    //offline condition page
    if (onlineStatus === false)
        return <h1>Opps!!! you are Offline</h1>;

    return (
        <div className="body ">
            <div className=" flex bg-orange-100 shadow-lg rounded-full">
                <div className=" flex items-center m-4 pl-32">
                    <input className="searchtext h-10 w-96 border rounded-lg px-4 border-black" placeholder={"Search Restaurants..."} value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                        if (searchText === "")
                            setFilteredRestro(listOfResturant);
                    }} />
                    &nbsp;
                    <button className=" mr-2 px-4 bg-orange-400 w-25 h-12 rounded-2xl ml-3 py-1" onClick={() => {
                        let searchFilterRestro = listOfResturant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestro(searchFilterRestro);
                    }}>Search</button>

                    <button className="-btn ml-4 bg-orange-400 w-25 h-12 rounded-2xl p-3 flex items-center " onClick={() => {
                        let filterList = filteredRestro.filter(res => res.info.avgRating >= 4.5);

                        setFilteredRestro(filterList);
                    }}>Top Rated restaurant 🔍

                    </button>

                </div>

                <div className=" bg-gray-300 text-black m-auto py-4 p-4 rounded-3xl">
                    <p>Status : {onlineStatus === false ? "🔴 Offline" : "🟢 Online"}</p>
                </div>
            </div>


            <div className=" shadow-2xl rounded-3xl flex flex-wrap m-[30px]">
                {
                    filteredRestro.map(
                        restaurant =>
                            <Link className="card-data-link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                {restaurant.info.veg ? <RestaurantsVegTagCard props={restaurant} /> : <RestroCard props={restaurant} />}


                            </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Body;