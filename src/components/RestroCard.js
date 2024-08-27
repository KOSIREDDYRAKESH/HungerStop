import { CDN_URL } from "../utils/constants";

// const restroCardStyle = {
//     backgroundColor : "#f0f0f0"
// }

const RestroCard = (props)=>{
    
    let {name,cuisines,costForTwo,sla,cloudinaryImageId,avgRating,areaName}=props.props.info;
    
    return (
        <div data-testid="resCard" className="restro-card hover:bg-slate-100 m-[20px] p-3 w-[300px] rounded-2xl shadow-lg">
            <div className="restro-img-container ">
                <img className="restro-img shadow-xl shadow-slate-400 rounded-3xl ml-4 mb-3 w-[250px] h-52" src={CDN_URL+cloudinaryImageId}/>
            </div>
            <div className="py-4">
                <h3 className="font-bold text-xl py-2">{name}</h3>
                <span className="text-orange-600 underline">{cuisines.join(" , ")}</span><br/>
                <span className="text-base font-bold">{costForTwo}</span>
                <hr className="border-black"/>
                <span>{avgRating}</span>
                &nbsp;|&nbsp;
                <span>{areaName[0].toUpperCase()+ (areaName.substring(1)).toLowerCase()}</span>
                &nbsp;|&nbsp;
                <span>{sla.lastMileTravelString}</span>
            </div>        
        </div>
    ); 
}

export const RestaurantsVegCard = (RestroCard)=>{
    return (props)=>{
        return (
            <div>
                <span className="absolute h-9 w-28 bg-slate-700 bg-gradient-to-r from-lime-400 text-white p-2 m-2 ml-9 items-center rounded-3xl">🥬<span className="ml-3">VEG</span></span>
                <RestroCard {...props}/>
            </div>
        );
    }
}

export default RestroCard;

