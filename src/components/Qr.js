import { Link } from "react-router-dom";

const Qr = () => {
    return (
        <div className="bg-orange-200 h-screen text-center">
            <h1 className="py-10 font-bold text-3xl">Payment QR</h1>
            <div className="py-44">
                <i class="fa-solid fa-qrcode text-9xl"></i>
                <div className="py-10">
                    <Link to={"/orderpickedup"}><button className="mr-2 px-4 shadow-lg bg-orange-400 w-52 h-12 rounded-2xl">Paid</button></Link>
                </div>
            </div>

        </div>
    );
}
export default Qr;