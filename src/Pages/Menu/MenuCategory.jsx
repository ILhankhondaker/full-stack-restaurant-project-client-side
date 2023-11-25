import { useState } from "react";
import ItemCard from "../Shared/ItemCard/ItemCard";
import Title from "../Shared/Title/Title";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { IoNotificationsCircleOutline } from "react-icons/io5";




const MenuCategory = ({ item, subheading, heading }) => {
    const [visibleItems, setVisibleItems] = useState(3); // Initial number of items to display

    const loadMore = () => {
        // Increase the number of visible items by, for example, 3
        setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    };



    const showLess = () => {
        // Decrease the number of visible items by, for example, 3
        setVisibleItems(prevVisibleItems =>
            prevVisibleItems > 3 ? prevVisibleItems - 3 : 3
        );
    }

    // const showLess = () => {
    //     // Decrease the number of visible items by, for example, 3
    //     setVisibleItems(prevVisibleItems =>
    //       prevVisibleItems > 6 ? prevVisibleItems - 3 : 3
    //     );
    //   };

    return (
        <div className="mt-10">

            <Title
                subheading={subheading}
                heading={heading}
            ></Title>

            <div className="grid grid-cols-3 gap-4 m-2 ">



                {/* this is item card from shared component */}
                {/* {
                    item.map(
                        (item) => (<ItemCard
                            key={item._id}
                            item={item}
                        ></ItemCard>)
                    )
                } */}

                {item.slice(0, visibleItems).map(
                    (item) => (<ItemCard
                        key={item._id}
                        item={item}
                    ></ItemCard>)
                )
                }


            </div>
            <div className="w-full mx-auto ">


                {visibleItems < item.length ? (
                    <div className="w-full mx-auto mt-10">

                        <button className="flex items-center content-center bg-neutral-900 p-2 text-xl   mx-auto border-solid border-2 rounded-md border-[#e4c590] hover:-translate-y-1 hover:scale-300 hover:duration-300 m-5 " onClick={loadMore}>Show More <GoChevronDown /> </button>

                        {visibleItems > 3 && <button className="flex items-center content-center bg-neutral-900 p-2 text-xl   mx-auto border-solid border-2 rounded-md border-[#e4c590] hover:-translate-y-1 hover:scale-300 hover:duration-300 " onClick={showLess}>Show Less   <GoChevronUp /></button>}


                    </div>
                ) : (

                    <p className="text-center mt-5 " ><IoNotificationsCircleOutline className="mx-auto text-[#e4c590] text-5xl animate-bounce" > </IoNotificationsCircleOutline > <span className=" text-2xl font-bold text-[#e4c590] font-serif font-extrabold bg-neutral-900 p-2 rounded-lg capitalize"> sorry No  more items to show.</span>  <button className="flex items-center content-center bg-neutral-900 p-2 text-xl   mx-auto border-solid border-2 rounded-md border-[#e4c590] hover:-translate-y-1 hover:scale-300 hover:duration-300 mt-5" onClick={showLess}>Show Less   <GoChevronUp /></button></p>
                )}




            </div>
        </div>
    );
};

export default MenuCategory;