import { useContext, useState } from "react";

import FoodDetailsModal from "../Modal/FoodDetailsModal";
import { FoodContext } from "../../../contexApi";


import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ItemCard = ({ item }) => {
    const { image, name, price, recipe } = item;

    const [showModal, setShowModal] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);

    // use Context API  
    const { cartData, setCartData } = useContext(FoodContext)

    // add cart 
    function handleAddToCart(event, item) {
        event.stopPropagation();
        // console.log(food)

        const found = cartData.find((food) => {

            return food._id === item._id;

        })

        if (!found) {
            setCartData([...cartData, item]);
            toast.success(`Added  ${item.name} to Cart `, {
                // position: toast.POSITION.BOTTOM_RIGHT,
                position: "bottom-right"
            })
            // for  voice read  
            let voiceTExt = new SpeechSynthesisUtterance(`You just  added ${item.name}`);
            speechSynthesis.speak(voiceTExt);
        } else {
            console.error(`the error  ${item.name}`)
            toast.error(` ${item.name} has been added to the cart already`, {
                // position: toast.POSITION.BOTTOM_RIGHT,
                position: "bottom-right"
            });
        }

    }

    function handleFoodSelection(movie) {

        setSelectedFood(movie);
        setShowModal(true);
    }

    function handleModalClose() {
        setSelectedFood(null);
        setShowModal(false);
    }


    return (

        <>

            {/* show modal  */}
            {showModal && (
                <FoodDetailsModal
                    food={selectedFood}
                    onClose={handleModalClose}
                    onCartAdd={handleAddToCart}
                />

            )}


            <div className=" ">

                <div className="card w-96 bg-neutral-900 shadow-xl ">
                    <button

                        onClick={() => handleFoodSelection(item)}
                    >
                        <figure><img className="p-3 rounded-3xl" src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title ">
                                {name}
                                <div className="badge bg-[#deb887] flex text-black  p-2 border-solid border-2 rounded-md border-[#e4c590] font-semibold text-lg text-center">$ {price}</div>
                            </h2>
                            <p>{recipe}</p>
                            <div className="card-actions justify-end">


                                <button className=" bg-neutral-900 p-1 border-solid border-2 rounded-md border-[#e4c590] hover:-translate-y-1 hover:scale-300 hover:duration-300 "

                                    onClick={(e) => handleAddToCart(e, item)}
                                >Place Order</button>


                            </div>
                        </div>
                    </button>
                </div>

            </div>
        </>

    );
};

export default ItemCard;