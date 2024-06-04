import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./NavBar.css"
import CartDetails from "./CartDetails";
import { useContext, useState } from "react";
import { FoodContext } from "../../../contexApi";
const NavBar = () => {

    const [showCart, setShowCart] = useState(false);
    // use Context API  
    const { cartData } = useContext(FoodContext)

    function handleCartShow() {
        // if (cartData.length > 0) {

        //     setShowCart(true);


        // } else {
        //     alert("Please  First  add any food on your cart")
        //     setShowCart(false);
        // }
        setShowCart(true);

    }

    const NavMenu = < >

        <li><Link className=" hover:text-white " to="">Home</Link></li>
        <li > <Link className="hover:text-white " to="/about">About</Link></li>
        <li><Link className=" hover:text-white  " to="/menu">Menu</Link></li>
        <li> <Link className=" hover:text-white  " to="/contact">Contact</Link></li>
        <li> <Link className=" hover:text-white " to="">Login</Link></li>

    </>

    return (
        <div className="">
            {
                showCart &&
                <CartDetails
                    onClose={() => setShowCart(false)}
                />
            }

            <div className="  navbar  bg-neutral-900 z-40 fixed  max-w-screen-xl   text-[#e4c590]  font-bold shadow-md shadow-yellow-500/50 ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavMenu}
                        </ul>
                    </div>
                    <Link to="" className="btn btn-ghost normal-case text-xl">Food Fun </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu   menu-horizontal  px-1 menu:where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(summary):not(.active):focus">
                        {NavMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button
                        onClick={handleCartShow}
                    >
                        <BsCart4 className="text-3xl mr-5 " />

                        {cartData.length > 0 && (
                            <span className="rounded-full top-[5px] right-[10px] text-black absolute  bg-[#e4c590]  text-center p-[2px] w-[30px] h-[30px]">
                                {cartData.length}
                            </span>
                        )}
                    </button>

                </div>
            </div>





        </div>
    );
};

export default NavBar;