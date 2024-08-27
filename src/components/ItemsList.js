import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../ReduxStore/cartSlice";

const ItemsList = ({ items }) => {
    //console.log(items[0]);
    //console.log(item.card.info)

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <>
            <div>
                {items.map(item =>
                    <div key={item.card.info.id}>
                        <hr className="mb-3 mt-3" />
                        <div className="item-container">
                            <div className="w-[2000px]">
                                <h4 className="ml-auto">{item.card.info.name}</h4>
                                ₹<span className="price mr-56">{item.card.info.price / 100}</span>
                                <p className="cuisines mr-56">{item.card.info.ratings.aggregatedRating.rating === undefined ? "" : "★" + item.card.info.ratings.aggregatedRating.rating}</p>
                                <br />
                                <p className="mr-56 font-normal">{item.card.info.description}</p>
                            </div>
                            <div className="flex flex-col-reverse items-center ">
                                <div className="absolute m-1 hover:p-2">
                                    <button className="bg-slate-50 text-lime-600 hover:text-xl border-[0.1px] border-black font-sans font-bold rounded-xl w-28 h-9 "
                                        onClick={() => handleAddItem(item)}
                                    > Add </button>
                                </div>
                                <img className="rounded-lg" src={CDN_URL + item.card.info.imageId} />
                            </div>

                        </div>
                    </div>)}
            </div>
            <div></div>
        </>
    );
}

export default ItemsList;

/* <div>
{items.map(item => 
<div key={item.card.info.id}>
    <hr className="mb-3 mt-3"/>
    <div className="item-container">
    <div>
        <h4>{item.card.info.name}</h4>
        ₹<span className="price">{item.card.info.price/100}</span>
        <p className="cuisines">★{item.card.info.ratings.aggregatedRating.rating}</p>
    </div> 
    <div>
        <img className="item-photo" src={CDN_URL+item.card.info.imageId}/>
    </div>
    </div>
</div>)}
</div> */