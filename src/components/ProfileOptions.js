import { Link } from "react-router-dom";

const ProfileOptions = () => {
    return (
        <div className="bg-slate-300">
            <sidebar className="flex-col bg-slate-500">
                <ul className="h-96 p-12 flex flex-col justify-around hover:cursor-pointer">
                    <Link to={"/profile/pastOrders"}><li className="rounded-xl bg-white h-12 px-9 p-3 hover:text-xl"><i class="fa-solid fa-bag-shopping pr-1"></i>  Orders</li></Link>
                    <Link to={"/profile/paymentsDeatils"}><li className="rounded-xl bg-white h-12 px-9 p-3 hover:text-xl"><i class="fa-solid fa-credit-card"></i>  Pyaments</li></Link>
                    <Link to={"/profile/address"}><li className="rounded-xl bg-white h-12 px-9 p-3 hover:text-xl"><i class="fa-solid fa-location-dot"></i>  Address</li></Link>
                </ul>
            </sidebar>
        </div>
    );

}

export default ProfileOptions;