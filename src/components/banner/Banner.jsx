import React from 'react';
import Blog from '../blog/Blog';

const Banner = () => {
    return (
        <div className='bg-slate-500'>
              
              <div className="w-full h-96 bg-cover bg-center rounded shadow-md" style={{backgroundImage:'url(picture/world.jpg)'}}>
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
                <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Improve Your Programming Knowledge <span className="underline text-green-500">Find Solution </span></h1>
                <p className='text-white'>Our site Specifically for programmers.Find Your solution on our page.</p>

                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-700 active:text-slate-900">Go Blog page......</button>
            </div>
        </div>
    </div>
    <Blog></Blog>
        </div>
    );
};

export default Banner;