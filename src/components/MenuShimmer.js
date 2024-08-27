const MenuShimmer = () => {
    return (
        <>
            <div className="menu-body bg-orange-300 bg-gradient-to-b from-white">
                <div className="shadow-xl h-[254px] rounded-full">
                    <div className="m-4">
                        <h1 className="w-64 rounded-xl h-12 bg-slate-300">{ }</h1>
                    </div>
                    <div className="restaurantMenu-details h-48 text-lg">
                        <h3 className="hotel-name-shimmer m-2 mx-2">{ }</h3>
                        <p className="card-names-shimmer m-1 mx-2">{ }</p>
                        <p className="card-names-shimmer m-1 mx-2">{ }</p>
                        <hr />
                        <p className="card-names-shimmer m-1 mx-2">{ }</p>
                    </div>
                </div>
                <br />
                <div className="mt-10 mb-6">
                    <input className="search-item mr-3  h-10 w-96 border rounded-lg px-4 border-black" placeholder="Search for dishes..." />
                    <button className="btns px-4 bg-orange-400 w-25 h-12 rounded-2xl py-1">Search</button>
                </div>
            </div>
            <div className="menu-body">
                <br />
                <div>
                    <input className="search-item" />
                    <button className="btns"></button>
                </div>

                <div>
                    <h4 className="hotel-name-shimmer">{ }</h4>
                    <hr />
                    <div className="flex justify-between">
                        <div>
                            <h4 className="hotel-name-shimmer">{ }</h4>
                            <p className="card-item-names-shimmer"></p>
                            <p className="card-item-names-shimmer"></p>
                        </div>
                        <div>
                            <img className="bg-slate-100 m-3 w-40 h-40 rounded-lg" />
                        </div>
                    </div>
                </div>

                <div>

                    <hr />
                    <div className="flex justify-between">
                        <div>
                            <h4 className="hotel-name-shimmer">{ }</h4>
                            <p className="card-item-names-shimmer"></p>
                            <p className="card-item-names-shimmer"></p>
                        </div>
                        <div>
                            <img className="bg-slate-100 m-3 w-40 h-40 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuShimmer;

