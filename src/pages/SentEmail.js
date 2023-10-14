import React from 'react';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import SentEmailCard from '../components/SentEmailCard';

const SentEmail = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-between'>
                <div className='w-1/5'>
                    <Sidenav />
                </div>
                <div className='w-4/5'>
                    <SentEmailCard />
                </div>
            </div>
        </div>
    )
}

export default SentEmail;