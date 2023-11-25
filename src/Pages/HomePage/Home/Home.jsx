
import Xyz from '../../Xyz';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import OurStreanth from '../OurStrenth/OurStreanth';
import TabMenu from '../TabMenu/TabMenu';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
const Home = () => {

    return (
        <div>

            <div>
                <Helmet>
                    <title>Food Fun | Home</title>
                    {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
                </Helmet>
                <Banner></Banner>

                <OurStreanth></OurStreanth>
                <TabMenu></TabMenu>
                <FromOurMenu></FromOurMenu>
                <Category></Category>
                <Testimonials></Testimonials>
                <Xyz></Xyz>



            </div>

        </div>
    );
};

export default Home;