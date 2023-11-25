
const ItemCard = ({ item }) => {
    const { image, name, price, recipe } = item;


    return (
        <div className=" ">
            <div className="card w-96 bg-neutral-900 shadow-xl ">
                <figure><img className="p-3 rounded-3xl" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">
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
    );
};

export default ItemCard;