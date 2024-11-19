import { useEffect, useState } from "react";
import Title from "../../Shared/Title/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./testimonialsStyle.css";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        fetch("reviews.json")
          .then((response) => response.json())
          .then((data) => setReview(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      {/* Title  */}
      <Title
        subheading={"What Our Client say"}
        heading={"Testimonials"}
      ></Title>

      <div>
        {/* {review.map(
                        (item) => (<OurMenu key={item._ide}
                            item={item}
                        ></OurMenu>)
                    )} */}

        {/* <ul>
                    {review.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul> */}
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {review.map((item) => (
          <SwiperSlide key={item._id} item={item}>
            <div className="text-center  mt-10  w-3/4 mx-auto">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={item.img} alt="" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-white">{item.name}</h1>

              <p className="text-2xl text-neutral-400 mt-5">
                ❝ {item.details} ❞{" "}
              </p>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 180 }}
                value={item.rating}
                readOnly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
