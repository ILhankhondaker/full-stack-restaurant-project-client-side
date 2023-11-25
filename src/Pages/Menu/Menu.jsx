import { Helmet } from 'react-helmet-async';
import menubgcover from "../../assets/menu/menubg.jpg"
import "./MenuStyle.css"
import CoverBg from '../Shared/CoverBg/CoverBg';
import useItem from '../../hooks/useItem';
import MenuCategory from './MenuCategory';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Menu = () => {

    const [menu] = useItem()
    const salad = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const desserts = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')



    return (
        <div className="pt-2">
            <Helmet>
                <title>Food Fun | Menu</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>


            <CoverBg
                bgimage={menubgcover}
                heading="Our Menu Item"
                discription="Enjoy a diverse culinary journey at our restaurant, where each dish is thoughtfully prepared to satisfy your palate and provide a memorable dining experience. Whether you are in the mood for a light appetizer, a hearty main course, or a sweet treat, our menu has something to delight every taste bud. Bon appétit!"
            ></CoverBg>






            <Tabs forceRenderTabPanel defaultIndex={0}>
                <TabList className="border-none text-center text-3xl mt-10 mb-2">
                    {/* 1 item  */}
                    <Tab>Fast food</Tab>

                    {/* 2nd item  */}
                    <Tab disabled>Lunch </Tab>
                    {/* 3rd item  */}
                    <Tab >Dinner </Tab>

                </TabList>

                {/* 1 item  */}
                <TabPanel>
                    <Tabs >
                        <TabList className="text-2xl text-center  capitalize">
                            {/* salad */}
                            <Tab>Salad</Tab>

                            {/* pizza */}
                            <Tab >pizzas</Tab>

                            {/* soups */}
                            <Tab>soups</Tab>

                            {/* dessserts */}
                            <Tab>desserts</Tab>

                            {/* drinks */}
                            <Tab>drinks</Tab>
                        </TabList>



                        <TabPanel>
                            {/* Salad Item  */}
                            <MenuCategory
                                item={salad}
                                subheading="Should Try"
                                heading="Salad"
                            ></MenuCategory>
                        </TabPanel>

                        <TabPanel>
                            {/* PIzza Item  */}
                            <MenuCategory
                                item={pizzas}
                                subheading="Should Try"
                                heading="pizza"
                            ></MenuCategory>
                        </TabPanel>


                        <TabPanel>
                            {/* Soup Item  */}
                            <MenuCategory
                                item={soups}
                                subheading="Should Try"
                                heading="soup"
                            ></MenuCategory>
                        </TabPanel>


                        <TabPanel>
                            {/* Desserrt Item  */}
                            <MenuCategory
                                item={desserts}
                                subheading="Should Try"
                                heading="Dessert"
                            ></MenuCategory>
                        </TabPanel>


                        <TabPanel>
                            {/* drinkss */}
                            <MenuCategory
                                item={drinks}
                                subheading="Should Try"
                                heading="drinks"
                            ></MenuCategory>
                        </TabPanel>



                    </Tabs>
                </TabPanel>

                {/* 2nd item  */}
                <TabPanel>
                    <Tabs >
                        <TabList>
                            <Tab>Philip J. Fry</Tab>
                            <Tab>Turanga Leela</Tab>
                            <Tab>Bender Bending Rodriguez</Tab>
                            <Tab>Amy Wong</Tab>
                            <Tab>Professor Hubert J. Farnsworth</Tab>
                            <Tab>Doctor John Zoidberg</Tab>
                        </TabList>
                        <TabPanel>
                            <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
                        </TabPanel>
                        <TabPanel>
                            <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                        </TabPanel>
                        <TabPanel>
                            <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who iss best friend. Built in Tijuana, Mexico, he is the Planet Express Sh\ cook.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
                        </TabPanel>
                        <TabPanel>
                            <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png" alt="Professor Hubert J. Farnsworth" />
                        </TabPanel>
                        <TabPanel>
                            <p>Alien from Decapod 10. Planet Exprstaff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                {/* 3rd item  */}
                <TabPanel>
                    <Tabs >
                        <TabList className="text-2xl text-center  capitalize">

                            <Tab>Couple Plater </Tab>


                            <Tab >Family Combo </Tab>


                            <Tab>Single dish</Tab>


                        </TabList>



                        <TabPanel>
                            <p className="text-center text-3xl my-20 ">An announcement for Couple Plater will be available soon.</p>
                        </TabPanel>

                        <TabPanel>
                            <p className="text-center text-3xl my-20 ">An announcement for Family Compo will be available soon.</p>
                        </TabPanel>
                        <TabPanel>
                            <p className="text-center text-3xl my-20 ">An announcement for Signle Dish will be available soon.</p>
                        </TabPanel>


                    </Tabs>
                </TabPanel>
            </Tabs>

            {/* data load  Salad Item   */}

            {/* <MenuCategory
                item={salad}
                subheading="Should Try"
                heading="Salad"
            ></MenuCategory> */}

        </div >
    );
};

export default Menu;