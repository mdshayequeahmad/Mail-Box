import React from 'react';
import Sidenav from '../components/Sidenav';
import Header from '../components/Header';
import SentEmails from '../components/SentEmails';

const Sent = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-between'>
                <div className='w-1/5'>
                    <Sidenav />
                </div>
                <div className='w-4/5'>
                    <SentEmails />
                </div>
            </div>
        </div>
    )
}

export default Sent;