import React from 'react';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import EmailCard from '../components/EmailCard';
import { useParams } from 'react-router-dom';

const Email = () => {

    const { id } = useParams();

    return (
        <div>
            <Header />
            <div className='flex justify-between'>
                <div className='w-1/5'>
                    <Sidenav />
                </div>
                <div className='w-4/5'>
                    <EmailCard id={id} />
                </div>
            </div>
        </div>
    )
}

export default Email;