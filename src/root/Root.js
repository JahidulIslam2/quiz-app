import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
           <Outlet/>
        </div>
    );
};

export default Root;