import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { RouterProvider, } from "react-router-dom";
// import { router } from './Routes/Routes.jsx';

// // react-halmet-async 
// import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    {/* HelmetProvider for use page title  */}
    {/* <HelmetProvider>
 

      <div className='max-w-screen-xl mx-auto  '>
        <RouterProvider router={router} />
      </div>

    </HelmetProvider> */}
    <App />
  </React.StrictMode>,
)
