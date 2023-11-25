import { useEffect, useState } from "react";
const useItem = () => {
    const [menu, setMenu] = useState([]); // Initialize data as an empty array

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Fetch data when the component mounts
        async function fetchData() {
            try {
                fetch('menu.json')
                    .then((response) => response.json())
                    // .then((data) => {
                    //     const popularItem = data.filter(item => item.category === "soup");

                    //     setMenu(popularItem);
                    //     setLoading(false)
                    // });

                    .then((data) => {
                        setMenu(data);
                        setLoading(false)
                    })

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);





    return [menu, loading]
}
export default useItem

