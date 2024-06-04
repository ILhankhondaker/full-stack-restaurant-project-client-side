
// import './App.css'

import { RouterProvider, } from "react-router-dom";
import { router } from './Routes/Routes.jsx';

// react-halmet-async 
import { HelmetProvider } from 'react-helmet-async';
// use  context API 
import { FoodContext } from "./contexApi/index.js";
import { useState } from "react";

// use  for  Toast  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cartData, setCartData] = useState([])

  return (
    <>
      <FoodContext.Provider value={{ cartData, setCartData }}>

        <HelmetProvider>
          {/* context api  */}

          <div className='max-w-screen-xl mx-auto  p-0'>
            <RouterProvider router={router} />
            {/* react toastify   */}
            <ToastContainer
              autoClose={1500}
            />

          </div>

        </HelmetProvider>

      </FoodContext.Provider>
    </>
  )
}

export default App




