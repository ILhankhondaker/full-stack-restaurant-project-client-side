import { Helmet } from 'react-helmet-async';
const Contact = () => {
    return (
        <div className="h-screen">
            <Helmet>
                <title>Food Fun | Contact</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <h1 className="text-center text-5xl pt-60"> This is Contact page </h1>
            <h2 className="text-center text-5xl ">Comminsoon</h2>
            <h1>Sr  Developer Name: Ilhan Khondaker  </h1>
            <h1>phone: <a href="tel:+8801680576091">+8801680576091</a></h1>
            <br />
            <h1>Jr Developer Name: Saymum Al Jubaer </h1>
            <h1>phone: <a href="tel:+88018123798631">+8801812379863</a></h1>

        </div>
    );
};

export default Contact;