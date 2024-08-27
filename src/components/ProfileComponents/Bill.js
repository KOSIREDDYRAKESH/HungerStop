import { useState } from "react";
const Bill = ({ items }) => {

    //console.log(items[0].card.info.name)
    const [num, setNum] = useState(1);
    let total = 0;
    let gst = 0;

    const remove = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    const add = () => {
        setNum(num + 1);
    }
    {
        items.map(item => {
            total = total + item.card.info.price / 100,
                gst = Math.trunc(gst + item.card.info.id / 10000000)

        })
    }
    const [toPay, setToPay] = useState(gst + gst / 4 + gst * 4 / 5 + total);


    return (
        <div className="bg-white text-black p-5">
            {items.map(item =>
                <div key={item.card.info.name}>
                    <hr className="mb-3 mt-3" />
                    <div className="flex justify-between">
                        <div className="flex">
                            🟢 &nbsp;
                            <h4>{item.card.info.name}</h4>
                            <br />
                        </div>
                        <div className="flex">
                            <div className="btn mx-14 border border-solid h-7 flex w-16">
                                <button className="px-1  py-1" onClick={remove}>➖</button>
                                <p className="px-1 ">{num}</p>
                                <button className=" hover:text-3xl text-xl text-green-500" onClick={add}>+</button>
                            </div>
                            <div className=" price text-slate-500">

                                ₹<span>{item.card.info.price / 100}</span>

                            </div>
                        </div>
                    </div>
                </div>)}
            <div className="mt-5 mx-14">
                <input className="border border-solid w-64" placeholder=" Any suggestions? we will pass on it...." />
            </div>
            <br />
            <div className="mx-16">
                <input className="border border-black border-dashed h-14 w-64" placeholder=" Apply Coupon %" />
            </div>
            <br />
            <h1>Bill Details</h1>
            <div className="mt-4 text-slate-500">
                <div className="flex justify-between">
                    <span>Items Details</span>
                    <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>₹{gst}</span>
                </div>
                <hr className="m-2" />
                <div className="flex justify-between">
                    <span>Delivery tip</span>
                    <span className="text-red-400 hover:cursor-pointer">
                        <span onClick={() => setToPay(toPay + 10)} className="text-slate-800 rounded-lg border border-0.5 mx-1 hover:text-lg">₹10 </span>
                        <span onClick={() => setToPay(toPay + 20)} className="text-slate-800 rounded-lg border border-0.5 mx-1 hover:text-lg">₹20 </span>
                        <span onClick={() => setToPay(toPay + 30)} className="text-slate-800 rounded-lg border border-0.5 mx-1 hover:text-lg">₹30 </span>
                        <span onClick={() => setToPay(toPay + 50)} className="text-slate-800 rounded-lg border border-0.5 mx-1 hover:text-lg">₹50 </span>
                        Add Tip</span>
                </div>
                <div className="flex justify-between">
                    <span>Flatform Fee</span>
                    <span>₹{gst / 4}</span>
                </div>
                <div className="flex justify-between">
                    <span>GST and Restaurant Charges</span>
                    <span>₹{gst * 4 / 5}</span>
                </div>
                <hr class=" h-1 mx-auto  bg-gray-100  rounded mt-4 mb-4 dark:bg-gray-700" />
                <div className="flex justify-between text-black text-lg">
                    <span>To Pay</span>
                    <span>₹{toPay * num}</span>
                </div>
            </div>
        </div>
    );
}

export default Bill;












//                         <div className="mt-4 text-slate-500">


//                         </div>