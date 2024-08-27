import MenuShimmer from "./MenuShimmer";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const { restId } = useParams();

    const restmenu = useRestaurantMenu(restId);

    const [showIndex, setShowIndex] = useState(0);

    if (restmenu.length === 0)
        return <MenuShimmer />;

    const { name, avgRating, costForTwoMessage, cuisines, sla, areaName, city } = restmenu.cards[2].card.card.info;

    let foodItems = restmenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    //console.log(restmenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

    const Allcategory = restmenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(Recomendedcategory[0].card.card.title);

    const Othercategory = restmenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    { Othercategory.map(c => { Allcategory.push(c); }) }

    //console.log(Allcategory[0].card.card.itemCards[0].card.info.id);

    //console.log(category[0]?.card?.card?.title)
    if (foodItems === undefined)
        foodItems = restmenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

    return (
        <div className="menu-body bg-orange-300 bg-gradient-to-b from-white">
            <div className="shadow-xl h-[254px] rounded-full">
                <div className="hotel-name text-3xl font-bold">
                    <h1 className="m-5">{name}</h1>
                </div>
                <div className="restaurantMenu-details h-48 text-lg">
                    <h3>{avgRating}☆||{costForTwoMessage}</h3>
                    <span className="cuisines">{cuisines.join(", ")}</span>
                    <p>{sla.slaString}</p>
                    <hr />
                    <p>{areaName[0].toUpperCase() + (areaName.substring(1)).toLowerCase()} | {city}</p>
                </div>
            </div>
            <br />
            <div className="mt-10 mb-6">
                <input className="search-item mr-3  h-10 w-96 border rounded-lg px-4 border-black" placeholder="Search for dishes..." />
                <button className="btns px-4 bg-orange-400 w-25 h-12 rounded-2xl py-1">Search</button>
            </div>
            {cartItems.length !== 0 &&
                <div className="fixed mt-20 bg-green-400 rounded-lg shadow-lg p-4 h-14 w-[45%] flex justify-between">
                    <p>{cartItems.length} item added</p>
                    <Link to={"/cart"}><button className="hover:cursor-pointer"><i class="fa-solid fa-bag-shopping pr-1"></i> VIEW CART</button></Link>
                </div>}
            {Allcategory.map((c, index) => (
                <div>
                    <RestaurantCategory key={c?.card?.card?.title} data={c?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => {
                            setShowIndex(index)
                        }}

                    />

                </div>))
            }

        </div>
    );
}
export default RestaurantMenu;