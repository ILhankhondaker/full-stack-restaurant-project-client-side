import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { RouterProvider, } from "react-router-dom";
// import { router } from './Routes/Routes.jsx';

// // react-halmet-async
// import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* HelmetProvider for use page title i use thisn  on App.jsx check */}
    {/* <HelmetProvider>
 

      <div className='max-w-screen-xl mx-auto  '>
        <RouterProvider router={router} />
      </div>

    </HelmetProvider> */}

    <App />
  </React.StrictMode>
);
