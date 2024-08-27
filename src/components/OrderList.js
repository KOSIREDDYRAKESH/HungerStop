import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";
const OrderList = (cartItems) => {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="mx-3 p-2 font-bold text-2xl">Cart</h1>
                <button className="mr-2 px-4 bg-orange-400 w-25 h-12 rounded-2xl"
                    onClick={handleClearCart}
                >Clear-all <i class="fa-solid fa-trash"></i></button>
            </div>
            <ItemsList items={cartItems} />
        </div>
    );
}
export default OrderList;