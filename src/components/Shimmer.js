const Shimmer = () => {
    return <div className="body">
        <div className="filter flex bg-orange-100 shadow-lg rounded-full">
            <div className="search flex items-center m-4 pl-32">
                <input className="searchtext h-10 w-96 border rounded-lg px-4 border-black" placeholder={"Search Restaurants..."} />
                &nbsp;
                <button className="btns mr-2 px-4 bg-orange-400 w-25 h-12 rounded-2xl ml-3 py-1" onClick={() => {

                }}>Search</button>
                <div className="">
                    <button className="filter-btn"></button>
                </div>
            </div>
        </div>
        <div className="shimmer-conatiner m-10 shadow-lg">
            <div className="flex flex-wrap mx-20 shadow-lg">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
            </div>
        </div>
    </div>
}

export default Shimmer;