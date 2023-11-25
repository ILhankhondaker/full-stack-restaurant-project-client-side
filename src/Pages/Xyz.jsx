import { useState, useEffect } from 'react';
import ItemCard from './Shared/ItemCard/ItemCard';


const Xyz = () => {

    const [data, setData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(3); // Initial number of items to display

    useEffect(() => {
        // Simulated API call to load initial data
        fetch('menu.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error loading data:', error));
    }, []); // The empty dependency array ensures the effect runs once when the component mounts

    const loadMore = () => {
        // Increase the number of visible items by, for example, 3
        setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    };

    return (



        <div className="mt-10 ">
            <h1 className='text-center text-5xl '>This is practice component </h1>


            <div>
                <h1>Load More Example</h1>
                <div className="grid grid-cols-3 gap-4 m-2 ">


                    {/* {data.slice(0, visibleItems).map((item, index) => (
                        <div key={index}>
                            <strong>{item.name}</strong>: {item.description}
                        </div>
                    ))} */}


                    {data.slice(0, visibleItems).map(
                        (item) => (<ItemCard
                            key={item._id}
                            item={item}
                        ></ItemCard>)
                    )
                    }


                </div>
                {visibleItems < data.length && (
                    <button onClick={loadMore}>Show More</button>
                )}
                <button>ok</button>
            </div>


        </div>
    );
};

export default Xyz;