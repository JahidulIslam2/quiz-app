import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/header/Header';



const Root = () => {
   
    // console.log(data)
    return (
      

        <div>
            
            <Header></Header>
           <Outlet/>
        </div>

    
    );
};

export default Root;