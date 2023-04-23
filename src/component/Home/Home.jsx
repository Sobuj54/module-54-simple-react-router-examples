import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>this is home.</h2>
            <Outlet />
        </div>
    );
};

export default Home;