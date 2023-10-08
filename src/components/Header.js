import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/mailBoxSlice';

const Header = () => {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(removeUser());
        console.log("User has successfully logged out.");
    };

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-semibold mt-2 ml-3'>
                    Welcome to your
                    <span className='text-teal-400'>
                        {" "}Mail Box
                    </span>
                </h1>
                <button
                    onClick={logoutHandler}
                    className='mr-5 mt-2 px-4 py-2 text-white bg-red-500 rounded-xl hover:bg-red-400'
                >
                    <BiLogOutCircle />
                </button>
            </div>
            <div className=' bg-black mt-5 h-[1px]'>
            </div>
        </div>
    )
}

export default Header;