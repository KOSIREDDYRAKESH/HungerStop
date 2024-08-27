import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {


    let length = 0;
    if (data?.itemCards != undefined) { length = data.itemCards.length; }
    else { length = data.categories.length; }

    // console.log(data);  

    const handleClick = () => {
        //setShowItems(!showItems);
        setShowIndex();

    }

    return (
        <div className="bg-white font-bold text-base rounded-xl m-4 p-4 shadow-md  hover:cursor-pointer">
            <div className="flex justify-between"
                onClick={handleClick}
            >
                <span>{data?.title}({length})</span>
                <span className="font-bold">V</span>
            </div>
            <div>
                {showItems && <ItemsList items={data.itemCards !== undefined ? data.itemCards : data.categories}
                />}
            </div>

        </div>
    );
}

export default RestaurantCategory;
