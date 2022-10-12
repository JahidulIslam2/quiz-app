// import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { DataContext } from '../../root/Root';
import Banner from '../banner/Banner';
import Topics from '../topic/Topics';


const Home = () => {
    const getdata=useLoaderData()
    // const data=getdata;

    // console.log(getdata)
    return (
        <div>
            <Banner ></Banner>
            <div className='flex md:flex-row lg:flex-row md:max-w-xl min-h-screen gap-4'>
                {
                    getdata.data.map(p => <Topics items={p}></Topics>)
                }
            </div>
            
        </div>
    );
};

export default Home;