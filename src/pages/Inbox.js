import React from 'react';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Emails from '../components/Emails';

const Inbox = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-between'>
                <div className='w-1/5'>
                    <Sidenav />
                </div>
                <div className='w-4/5'>
                    <Emails />
                </div>
            </div>
        </div>
    )
}

export default Inbox;