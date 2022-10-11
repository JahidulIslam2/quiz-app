import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Topics from '../topic/Topics';


const Home = () => {
    const getdata=useLoaderData();
    const {data}=getdata;

    
    return (
        <div>
            <Banner ></Banner>
            <div className='flex md:flex-row lg:flex-row md:max-w-xl min-h-screen gap-4'>
                {
                    data.map(p => <Topics items={p}></Topics>)
                }
            </div>
            
        </div>
    );
};

export default Home;