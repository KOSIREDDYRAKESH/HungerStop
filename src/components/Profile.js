import ProfileOptions from "./ProfileOptions";

const Profile = () => {
    return (
        <div className="bg-[#1e92bb] pb-10">
            <div className="pt-32 pl-32">
                <h1>Name</h1>
                <div>
                    <span>Number</span>
                    <span>E-mail</span>
                </div>
            </div>
            <div className="shadow-lg  mt-11 ml-32 mr-32 h-screen bg-white flex">
                <div className=" w-4/12 order-page-container" id="root2">


                    <ProfileOptions />

                </div>
                <div className="bg-slate-200 w-6/12 m-14">


                </div>
            </div>
        </div>
    );
}


export default Profile;