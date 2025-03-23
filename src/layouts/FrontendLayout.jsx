import React from 'react';
import Navbar from './../assets/components/Navbar';
import { Outlet } from "react-router";
import Footer from './../assets/components/Footer';
import Discuss from './../assets/components/Discuss';

const FrontendLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Discuss />
            <Footer />
        </>
    );
};

export default FrontendLayout;