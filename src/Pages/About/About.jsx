import { Helmet } from 'react-helmet-async';
const About = () => {
    return (
        <div className="h-screen pt-72">
            <Helmet>
                <title>Food Fun | About</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <h1 className="text-center text-5xl ">This About </h1>
            <h2 className="text-center text-5xl ">Comminsoon</h2>
        </div>
    );
};

export default About;