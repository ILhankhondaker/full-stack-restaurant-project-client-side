import poster from '../../../assets/home/Poster.png'
// import bgimage from '../../../assets/home/slider/s4.jpeg'
const CoverBg = ({ bgimage, heading, discription }) => {
    return (
        <div>

            {/* hero item  */}

            <div className="hero h-[500px] pt-5" style={{ backgroundImage: `url(${bgimage})` }}>
                <div className="hero-overlay bg-opacity-4f0"></div>
                <div className='lg:w-2/3 p-5 lg:p-10 bg-black mx-auto contentBg ' style={{ backgroundImage: `url(${poster})` }}>
                    <div className="max-w-md text-center mx-auto">
                        <h1 className="mb-5 text-4xl font-bold">{heading}</h1>
                        <p className="mb-5  text-justify">{discription}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoverBg;