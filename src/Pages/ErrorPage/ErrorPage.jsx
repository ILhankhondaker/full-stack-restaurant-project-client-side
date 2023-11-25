import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ErrorPage = () => {
    return (
        <div className="h-screen">
            <h1 className="text-2xl lg:text-9xl text-center pt-60 font-bold">404  </h1>



            <motion.div className="w-40 mx-auto mt-20 box"

                // className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 100,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}

            >
                <button className="mx-auto">  <Link className="mx-auto text-center font-bold text-xl" to="/">↢ Back To Home </Link></button>
            </motion.div>

        </div>
    );
};

export default ErrorPage;