import sp from "../../../assets/home/separator.svg"

const Title = ({ heading, subheading }) => {
    return (
        <div className='my-5 w-80 mx-auto'>
            <p className='text-center text-xl text-yellow-500'>*** {subheading} ***</p>
            <h1 className='text-center font-medium text-xl lg:text-3xl uppercase my-2'>{heading}</h1>
            <img className="w-40 mx-auto " src={sp} alt="" />
        </div>
    );

};

export default Title;