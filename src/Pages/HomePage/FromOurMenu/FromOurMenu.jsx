// import { useEffect, useState } from "react";
import Title from "../../Shared/Title/Title";
// import OurMenu from "./OurMenu";
import menuimg from "../../../assets/home/menu-single-1.jpg"
import useItem from "../../../hooks/useItem";
import ItemCard from "../../Shared/ItemCard/ItemCard";


const FromOurMenu = () => {

    const [menu] = useItem();
    const dessert = menu.filter(item => item.category === 'bestMenu')

    // const [menu, setMenu] = useState([]); // Initialize data as an empty array

    // useEffect(() => {
    //     // Fetch data when the component mounts
    //     async function fetchData() {
    //         try {
    //             fetch('menu.json')
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     const popularItem = data.filter(item => item.category === "soup");

    //                     setMenu(popularItem);
    //                 });

    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }

    //     fetchData();
    // }, []);
    return (

        <div className="my-20">
            <Title
                subheading={"BEST FOOD MENU"}
                heading={"Choose Your Best Menus"}
            ></Title>
            <div className="lg:flex justify-between">
                <img src={menuimg} alt="" />

            </div>


            <div className="grid grid-cols-3 gap-4 m-2 ">

                {/* {dessert.map(
                    (item) => (<OurMenu key={item._id}
                        item={item}
                    ></OurMenu>)
                )} */}

                {/* this is item card from shared component */}
                {
                    dessert.map(
                        (item) => (<ItemCard
                            key={item._id}
                            item={item}
                        ></ItemCard>)
                    )
                }



            </div>

        </div >
    );
};

export default FromOurMenu;