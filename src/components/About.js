import UserClass from "./UserClass";

const About = () => {
    return (
        <div className=" text-center p-5 bg-orange-100 h-screen">
            <h1 className="font-bold text-xl">About Us</h1>
            <div className="text-3xl">
                <UserClass name={""} Locality={"Vizag"} Email={"rakeshkosiredd6@gmail.com"} />
            </div>
        </div>
    );
}

export default About;