import React from 'react';
import Header from '../components/Header';
import ComposeMail from '../components/ComposeMail';
import Sidenav from '../components/Sidenav';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-between'>
                <div className='w-1/5'>
                    <Sidenav />
                </div>
                <div className='w-4/5'>
                    <ComposeMail />
                </div>
            </div>
        </div>
    )
}

export default Home;