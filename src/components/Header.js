import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";

export const Header = () => {

    // subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems.length);

    const { loginUser } = useContext(UserContext);

    const [btnNameReact, setBtnNameReact] = useState("LOGIN");
    return (
        <div className="w-screen header flex justify-between bg-orange-300 rounded-3xl shadow-lg m-1 mb-5 ">
            <Link to={"/"}>
                <div className=" p-2">
                    <img className="w-20 rounded-full shadow-lg" src={LOGO_URL} />

                </div>
            </Link>
            <div className=" flex items-center">
                <ul className="flex bg-orange-400 p-4 m-4 rounded-3xl">
                    <li className="px-6 hover:text-xl"><Link to="/">Home</Link></li>
                    <li className="px-6 hover:text-xl"><Link to="/about">About Us</Link></li>
                    <li className="px-6 hover:text-xl"><Link to="/contact">Contact Us </Link></li>
                    <li className="px-6 hover:text-xl"><Link to="/profile">Profile </Link></li>
                    <li className="px-6 hover:text-xl links"><Link to="/cart"><i className="fas fa-shopping-cart">({cartItems.length})</i></Link></li>
                </ul>
                <button className=" hover:text-xl mr-2 px-9 bg-orange-400 w-25 h-12 rounded-2xl" onClick={() => {
                    btnNameReact === "LOGIN" ? setBtnNameReact("LOGOUT") : setBtnNameReact("LOGIN");;
                }}
                >{btnNameReact}</button>
                <span> {loginUser}</span>
            </div>

        </div>

    );
}

export default Header;