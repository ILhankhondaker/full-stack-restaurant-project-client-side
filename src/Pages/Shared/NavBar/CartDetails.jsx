import { useContext } from "react";
import { FoodContext } from "../../../contexApi";

import Checkout from "../../../assets/checkout.svg";
import Delete from "../../../assets/delete.svg";

import { toast } from 'react-toastify';

const CartDetails = ({ onClose }) => {

    const { cartData, setCartData } = useContext(FoodContext)
    console.log(cartData)


    function handleDeleteCart(event, itemId, item) {
        event.preventDefault();

        const filteredItem = cartData.filter((item) => {
            return item._id !== itemId
        })
        setCartData([...filteredItem])
        toast.success(`Removed ${item.name} from Cart !`, {
            position: "bottom-right"
        });
        let voiceTExt = new SpeechSynthesisUtterance(`You just  removed ${item.name}`);
        speechSynthesis.speak(voiceTExt);
    }
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
                    <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
                        Your Carts
                    </h2>
                    <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
                        {
                            cartData.length === 0 ?
                                (
                                    <p className="text-3xl">The Cart is Empty!!! <br />
                                        place your  order
                                    </p>
                                ) :
                                (<>
                                    {cartData.map((item) => (
                                        <div
                                            key={item.id}
                                            className="grid grid-cols-[1fr_auto] gap-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    className="rounded overflow-hidden"
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={"50px"}
                                                    height={"50px"}
                                                />
                                                <div>
                                                    <h3 className="text-base md:text-xl font-bold">
                                                        {item.name}
                                                    </h3>
                                                    <p className="max-md:text-xs text-[#575A6E]">
                                                        {item.genre}
                                                    </p>
                                                    <span className="max-md:text-xs">
                                                        ${item.price}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between gap-4 items-center">
                                                <button
                                                    className="bg-red-500 rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                                                    onClick={(e) => handleDeleteCart(e, item._id, item)}
                                                >
                                                    <img
                                                        className="w-5 h-5"
                                                        src={Delete}
                                                        alt="delete"
                                                    />
                                                    <span className="max-md:hidden">
                                                        Remove
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </>)
                        }
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a
                            className="bg-[#deb887] flex text-black  p-2 border-solid border-2 rounded-md border-[#e4c590] font-semibold text-lg text-center"
                            href="#"
                        >
                            <img
                                src={Checkout}
                                width="24"
                                height="24"
                                alt="Checkout"
                            />
                            <span>Checkout</span>
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
    );
};

export default CartDetails;