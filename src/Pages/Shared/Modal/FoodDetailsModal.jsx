
const FoodDetailsModal = ({ food, onClose, onCartAdd }) => {


    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-neutral-900 shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
                    <img
                        className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
                        src={food.image}
                        alt=""
                    />
                    <div className="p-5 lg:p-11">
                        <div className="">
                            <h2 className="text-3xl lg:text-[50px] mb-2 font-bold mb-5">
                                {food.name}
                            </h2>
                            <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                                {/* {food.recipe} */}
                            </span>
                            <div></div>
                        </div>
                        <p className="text-sm lg:text-base mb-8 lg:mb-16">
                            {food.recipe}
                        </p>
                        <div className="grid lg:grid-cols-2 gap-2">
                            <a
                                className="bg-[#deb887] text-black  p-2 border-solid border-2 rounded-md border-[#e4c590] font-bold text-lg text-center"
                                href="#"
                                onClick={(e) => onCartAdd(e, food)}
                            >

                                <span>${food.price} | Add to Cart</span>
                            </a>
                            <a
                                className="bg-neutral-900 p-2 border-solid border-2 rounded-md border-[#e4c590] font-semibold text-lg text-center"
                                href="#"
                                onClick={onClose}
                            >
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsModal;