import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import fish from "../../../assets/icon/fish.png"
import meat from "../../../assets/icon/meat2.png"
import Vegetable from "../../../assets/icon/vegetable.png"
import pasta from "../../../assets/icon/pasta.png"
import desset from "../../../assets/icon/dessert.png"
import pizza from "../../../assets/icon/pizza.png"

import 'react-tabs/style/react-tabs.css';
import "./TabStyle.css"
import Title from '../../Shared/Title/Title'
import { Link } from 'react-router-dom';

const TabMenu = () => {
    return (
        <div className='h-[800px] lg:h-[500px] my-20  '>

            <Title
                subheading="What you Like in"
                heading="DELICIOUS RECIPE"
            ></Title>

            <div className=' '>
                <Tabs >
                    <div className='w-full text-center mb-10'>
                        <TabList className=" text-2xl" >
                            {/* 1 */}
                            <Tab>
                                <img className='h-20' src={fish} alt="" />
                                Fish</Tab>
                            {/* 2 */}
                            <Tab disabled>
                                <img className='h-20' src={Vegetable} alt="" />
                                Vegetable </Tab>
                            {/* 3 */}
                            <Tab>
                                <img className='h-20' src={meat} alt="" />
                                Meat</Tab>
                            {/* 4 */}
                            <Tab>
                                <img className='h-20' src={desset} alt="" />
                                Dessert</Tab>
                            {/* 5 */}
                            <Tab>
                                <img className='h-20' src={pasta} alt="" />
                                Pasta</Tab>
                            {/* 6 */}
                            <Tab>
                                <img className='h-20' src={pizza} alt="" />
                                pizza</Tab>
                        </TabList>
                    </div>

                    {/* 1 */}
                    <TabPanel>
                        <div className=" hero bg-stone-950 ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/9796372_Fried%20Grilled%20Rupchanda%20Fish.jpg" className="max-w-sm rounded-lg shadow-2xl w-80 h-40" />
                                <div>
                                    <h1 className="text-3xl font-bold">The Perfect Fish Recipe</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                    <Link to="/menu">
                                        <button className="btn  bg-neutral-900 text-[#e4c590]  border-none hover:bg-neutral-600">See Menu</button>
                                    </Link>



                                </div>
                            </div>
                        </div>

                    </TabPanel>

                    {/* 2 */}
                    <TabPanel>
                        <img className='float-left m-2' src="https://lh5.googleusercontent.com/p/AF1QipMr_wUMC3fGNk_KRAMm_dd-8jBkR8aGYy6wcvCt=w213-h160-k-no" alt="" />
                        <p> 22222Hi this is Ilhan Khondaker . I am a MERN stack developer. As a web developer, I have experience in identifying web-based User Interaction along with designing & implementing highly responsive user interface components by deploying React concepts  </p>

                    </TabPanel>

                    {/* 3 */}
                    <TabPanel>
                        <div className=" hero bg-stone-950">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://meats.fritzbrosinc.com/template-2017/images/pages/departments/620_360/beef.jpg" className="max-w-sm rounded-lg shadow-2xl w-80 h-40" />
                                <div>
                                    <h1 className="text-3xl font-bold">The Perfect Medium Rare Steak Recipe</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>



                                    <Link to="/menu">
                                        <button className="btn  bg-neutral-900 text-[#e4c590]  border-none hover:bg-neutral-600">See Menu</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </TabPanel>

                    {/* 4 */}
                    <TabPanel>
                        <div className=" hero bg-stone-950">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://www.ediblearrangements.com/blog/wp-content/uploads/2022/03/Pudding-min.jpg" className="max-w-sm rounded-lg shadow-2xl h-40 w-80 " />
                                <div>
                                    <h1 className="text-3xl font-bold">The Perfect Desset</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <Link to="/menu">
                                        <button className="btn  bg-neutral-900 text-[#e4c590]  border-none hover:bg-neutral-600">See Menu</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </TabPanel>

                    {/* 5 */}
                    <TabPanel>
                        <div className=" hero bg-stone-950">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://pbs.twimg.com/media/CQvdOE2VEAALVGY?format=jpg&name=large" className="max-w-sm rounded-lg shadow-2xl h-40 w-80 h-40 " />
                                <div>
                                    <h1 className="text-3xl font-bold">The Pasta</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <Link to="/menu">
                                        <button className="btn  bg-neutral-900 text-[#e4c590]  border-none hover:bg-neutral-600">See Menu</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </TabPanel>
                    {/* 6 */}
                    <TabPanel>
                        <div className=" hero bg-stone-950">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://miro.medium.com/v2/resize:fit:1400/0*oTfm1pTXLxitHHFy.jpg" className="max-w-sm rounded-lg shadow-2xl h-40 w-80 h-40 " />
                                <div>
                                    <h1 className="text-3xl font-bold">The Pizza </h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <Link to="/menu">
                                        <button className="btn  bg-neutral-900 text-[#e4c590]  border-none hover:bg-neutral-600">See Menu</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </TabPanel>
                </Tabs>
            </div>









        </div>


    );
};

export default TabMenu;