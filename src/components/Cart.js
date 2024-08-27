import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../ReduxStore/cartSlice";
import { EMPTY_CART_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import Bill from "./ProfileComponents/Bill";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems[0]);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (

        <div >
            {cartItems.length !== 0 ?
                <div className="flex">
                    <div className="m-3 p-3 w-6/12">
                        <div className="flex justify-between">
                            <h1 className="mx-3 p-2 font-bold text-2xl">Cart</h1>
                            <button className="mr-2 px-4 bg-orange-400 w-25 h-12 rounded-2xl"
                                onClick={handleClearCart}
                            >Clear-all <i class="fa-solid fa-trash"></i></button>
                        </div>

                        <ItemsList items={cartItems} />
                    </div>

                    <div className="bg-slate-200 text-white w-[43%] ml-14 mr-14 p-5">
                        <Bill items={cartItems} />
                        <div className="m-7 text-center">
                            <Link to={"/Qr"}><button className="mr-2 px-4 shadow-lg bg-orange-400 w-52 h-12 rounded-2xl">Pay Now</button></Link>
                        </div>
                    </div>
                </div>
                :
                <div className="flex w-screen">
                    <h1 className="mx-3 p-2 font-bold text-2xl">Cart</h1>
                    <div>
                        <img className="h-[500px]" src={EMPTY_CART_LOGO} />
                        <span className="px-64">You can go to home page to view more restaurants</span>
                    </div>
                    <div className="mt-36">
                        <Link to="/"><button className="mr-2 px-4 bg-orange-400 w-25 h-12 rounded-2xl">Search Restaurants</button></Link>
                    </div>
                </div>}
        </div>




    );
}

export default Cart;