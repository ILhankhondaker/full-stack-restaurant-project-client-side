import Title from "../../Shared/Title/Title";
import os1 from "../../../assets/home/os1.png"
import os2 from "../../../assets/home/os2.png"
import os3 from "../../../assets/home/os3.png"
import os4 from "../../../assets/home/os4.png"

import { motion } from "framer-motion"

const OurStreanth = () => {
    return (
        <div className="my-20">



            {/* =======title start ======== */}
            <Title
                subheading="WHY CHOOSE US"
                heading="Our Strenght"
            ></Title>
            {/*------ title end --------- */}


            {/* parents div of card  */}
            <div className="grid lg:grid-cols-4 gap-4"
            >

                {/* card 1  */}
                <motion.div className="mx-auto w-60 bg-zinc-900 py-5 box rounded-md"
                    //  className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 30,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}



                >
                    <img className="mx-auto hover:scale-110 duration-500" src={os1} alt="" />
                    <h1 className="text-center text-white text-2xl my-3">Hygienic Food</h1>
                    <p className="text-center text-slate-500 ">Lorem Ipsum is simply dummy printing and typesetting.</p>

                </motion.div>

                {/* card 2  */}
                <motion.div className="mx-auto w-60 bg-zinc-950 py-5 box rounded-md"
                    //  className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 30,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img className="mx-auto   hover:rotate-45  duration-500 " src={os2} alt="" />
                    <h1 className="text-center text-white text-2xl my-3">Fresh Environment</h1>
                    <p className="text-center text-slate-500 ">Lorem Ipsum is simply dummy printing and typesetting.</p>

                </motion.div>

                {/* card 3  */}
                <motion.div className="mx-auto w-60 bg-zinc-900 py-5 box rounded-md"
                    //  className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 30,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img className="mx-auto  hover:scale-110 duration-500 " src={os3} alt="" />
                    <h1 className="text-center text-white text-2xl my-3">Skilled Chefs</h1>
                    <p className="text-center text-slate-500 ">Lorem Ipsum is simply dummy printing and typesetting.</p>

                </motion.div>


                {/* card 4  */}
                <motion.div className="mx-auto w-60 bg-zinc-950 py-5 box rounded-md"
                    //  className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 30,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img className="mx-auto  hover:rotate-45 duration-500 " src={os4} alt="" />
                    <h1 className="text-center text-white text-2xl my-3">Event & Party</h1>
                    <p className="text-center text-slate-500 ">Lorem Ipsum is simply dummy printing and typesetting.</p>

                </motion.div>



            </div>
        </div>
    );
};

export default OurStreanth;