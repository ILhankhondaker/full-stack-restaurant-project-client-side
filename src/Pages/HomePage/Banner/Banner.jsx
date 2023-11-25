import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);



import img01 from "../../../assets/home/slider/s1.jpeg"
import img02 from "../../../assets/home/slider/s2.jpg"
import img03 from "../../../assets/home/slider/s3.jpg"
import img04 from "../../../assets/home/slider/s4.jpeg"
import img06 from "../../../assets/home/slider/s6.jpg"
import img08 from "../../../assets/home/slider/s8.jpg"
import img09 from "../../../assets/home/slider/s9.jpg"
import img010 from "../../../assets/home/slider/s10.jpg"
import img011 from "../../../assets/home/slider/s11.jpg"
import img012 from "../../../assets/home/slider/s12.jpg"

const Banner = () => {
    return (

        <div className=''>
            <AutoplaySlider
                className="lg:h-screen"
                play={true}
                animation="cubeAnimation"
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >


                <div data-src={img06} />
                <div data-src={img08} />
                <div data-src={img09} />
                <div data-src={img012} />
                <div data-src={img010} />
                <div data-src={img02} />
                <div data-src={img01} />
                <div data-src={img03} />
                <div data-src={img04} />
                <div data-src={img011} />
            </AutoplaySlider>
        </div>

    );
};

export default Banner;