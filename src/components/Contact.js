const Contact = () => {
    return (
        <>
            <div className="text-center">
                <h1 className="font-bold text-3xl">Contact Us</h1>
                <div className=" flex flex-col items-center m-4 p-4">
                    <input placeholder=" Name" className="border border-black w-80 rounded-md m-7 p-1" />
                    <input placeholder=" E-mail" className="border border-black w-80 rounded-md p-1" />
                    <input placeholder="  Message...." type="text" className="m-5 border border-black w-80 rounded-md h-32" />
                    <button className="hover:text-xl mr-2 px-9 bg-orange-400 w-25 h-12 rounded-2xl m-5">Submit</button>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-bold text-lg mt-5 underline">FOLLOW US</h1>
                <ul className="rounded-b-[50px] flex justify-evenly mt-9 p-3 h-24 bg-orange-400 text-3xl">
                    <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                    <li><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                    <li> <i class="fa fa-twitter-square" aria-hidden="true"></i></li>
                    <li><i class="fa fa-whatsapp" aria-hidden="true"></i></li>
                    <li><i class="fa-regular fa-envelope"></i></li>
                </ul>
            </div>
        </>
    );
}
export default Contact;