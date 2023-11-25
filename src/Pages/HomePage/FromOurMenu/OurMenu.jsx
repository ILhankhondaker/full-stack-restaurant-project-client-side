

const OurMenu = ({ item }) => {

    const { image, name, price, recipe } = item;
    return (
        <div className="">
            {/* <div className="flex my-10 mx-5">
                <img className="mr-5" src={image} alt="" />
                <h1 className="text-xl lg:text-3xl ">{name}</h1>
                <h1></h1>
                <h1 className="badge badge-ghost font-bold lg:text-xl ">$ {price}</h1>
            </div> */}


            {/* another menu item  */}

            <div className="">

                <div className="card w-96 bg-neutral-900 shadow-xl ">
                    <figure><img className="p-3 rounded-3xl" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-neutral text-xl">$ {price}</div>
                        </h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default OurMenu;