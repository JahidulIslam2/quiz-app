import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';


const Home = () => {
    const getdata=useLoaderData();
    const {data}=getdata;

    
    return (
        <div>
                {
                    data.map(p => <Banner items={p}></Banner>)
                }

            
        </div>
    );
};

export default Home;