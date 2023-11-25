
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// effect-cards 
import 'swiper/css/effect-cards';

// import required modules
import { Pagination } from 'swiper/modules';




import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"
import slider8 from "../../../assets/home/slide8.jpg"
import slider9 from "../../../assets/home/slide9.jpg"
import slider10 from "../../../assets/home/slide10.jpg"
import poster from "../../../assets/home/Poster.png"
import './poster.css'
import Title from '../../Shared/Title/Title';


const Category = () => {



    return (

        <div className="my-20">

            {/* text item  */}
            <Title subheading={"From 11:00am to 10:00pm"} heading={"Order Online"}></Title>

            {/* ==swiper start  ==*/}
            <div className='swiperbg  bg-left bg-no-repeat'>
                <div className='bgid bg-right bg-no-repeat'>
                    <Swiper


                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>

                            <img className='mx-auto' src={slider8} alt="" />
                            <h1 className='text-xl  lg:text-3xl -mt-12  text-white uppercase text-center'>Fishes </h1>
                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='mx-auto' src={slider9} alt="" />
                            <h1 className='text-xl  lg:text-3xl -mt-12  text-white uppercase text-center'>Kabab </h1>
                        </SwiperSlide>

                        <SwiperSlide>

                            <img className='mx-auto' src={slider10} alt="" />
                            <h1 className='text-xl  lg:text-3xl -mt-12  text-white uppercase text-center'>Pasta </h1>
                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='mx-auto' src={slider1} alt="" />
                            <h1 className='text-xl  lg:text-4xl -mt-12  text-white uppercase text-center'>Salads </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src={slider2} alt="" />
                            <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>pizzas  </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src={slider3} alt="" />
                            <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                                soups  </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src={slider4} alt="" />
                            <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                                Pastrys   </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src={slider5} alt="" />
                            <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                                soups  </h1>
                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='mx-auto' src={slider1} alt="" />
                            <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>Salads </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src={slider2} alt="" />
                            <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>pizzas  </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src={slider3} alt="" />
                            <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                                soups  </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src={slider4} alt="" />
                            <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                                Pastrys   </h1>
                        </SwiperSlide>
                    </Swiper>


                </div>
            </div>

            {/* <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <img className='mx-auto' src={slider8} alt="" />
                    <h1 className='text-xl  lg:text-3xl -mt-12  text-white uppercase text-center'>Fishes </h1>
                </SwiperSlide>
                <SwiperSlide>

                    <img className='mx-auto' src={slider9} alt="" />
                    <h1 className='text-xl  lg:text-3xl -mt-12  text-white uppercase text-center'>Kabab </h1>
                </SwiperSlide>

                <SwiperSlide>

                    <img className='mx-auto' src={slider10} alt="" />
                    <h1 className='text-xl  lg:text-3xl -mt-12  text-white uppercase text-center'>Pasta </h1>
                </SwiperSlide>
                <SwiperSlide>

                    <img className='mx-auto' src={slider1} alt="" />
                    <h1 className='text-xl  lg:text-4xl -mt-12  text-white uppercase text-center'>Salads </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slider2} alt="" />
                    <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>pizzas  </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slider3} alt="" />
                    <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                        soups  </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slider4} alt="" />
                    <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                        Pastrys   </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slider5} alt="" />
                    <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                        soups  </h1>
                </SwiperSlide>
                <SwiperSlide>

                    <img className='mx-auto' src={slider1} alt="" />
                    <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>Salads </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slider2} alt="" />
                    <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>pizzas  </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slider3} alt="" />
                    <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                        soups  </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slider4} alt="" />
                    <h1 className='text-xl lg:text-4xl -mt-12  text-white uppercase text-center'>
                        Pastrys   </h1>
                </SwiperSlide>
            </Swiper> */}

            {/* ********* poster start *********** */}
            <div className='mt-20 poster    bg-no-repeat bg-center bg-contain p-5 lg:p-20 bg-gradient-to-r from-purple-500 to-pink-500 ' >

                <div className='lg:w-2/3 p-5 lg:p-20 bg-black mx-auto contentBg' style={{ backgroundImage: `url(${poster})` }}>
                    <h1 className='text-4xl text-center font-bold mb-2'> Food Fun</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>



        </div >
    );
};

export default Category;