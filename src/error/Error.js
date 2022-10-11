import React from 'react';
import { useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import reader from "../assest/anim.json";


const Error = () => {
    const error=useRouteError();
    console.error(error);

  
    return (
        <div>
        
            <h1 className='text-red-800'> Oops</h1>
            <h1 className='text-2xl'>
                 <i>{error.statusText || error.message}</i>
            </h1>
            <p className='flex justify-center'>
                  <Lottie animationData={reader} loop={true} className='h-9 w-2/4 '/>
            </p>
        </div>
    );
};

export default Error;