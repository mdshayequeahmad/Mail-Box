import React from 'react';
import { RiUser2Fill } from 'react-icons/ri';
import { BiSend } from 'react-icons/bi';
import { MdForwardToInbox } from 'react-icons/md';
import { HiMiniPlus } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidenav = () => {

    const user = useSelector((state) => state.mailBox.userInfo);
    const { email } = user;

    return (
        <div className='mt-6 pl-4'>
            <div className='flex items-center'>
                <RiUser2Fill className='text-2xl mr-1 text-cyan-500' />
                <h1 className='text-3xl font-semibold text-cyan-500'>Accounts</h1>
            </div>
            <p className='text-xl pl-3 pt-1'>{email}</p>
            <div>
                <Link to="/">
                    <div className='flex items-center ml-3 mt-6'>
                        <HiMiniPlus className='text-2xl font-semibold mr-1 text-cyan-500' />
                        <h1 className='text-2xl font-semibold text-cyan-500'>New Mail</h1>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/inbox">
                    <div className='flex items-center ml-3 mt-6'>
                        <MdForwardToInbox className='text-2xl font-semibold mr-1 text-cyan-500' />
                        <h1 className='text-2xl font-semibold text-cyan-500'>Inbox</h1>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/sent">
                    <div className='flex items-center ml-3 mt-6'>
                        <BiSend className='text-2xl font-semibold mr-1 text-cyan-500' />
                        <h1 className='text-2xl font-semibold text-cyan-500'>Sent</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidenav;