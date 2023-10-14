import React from 'react';
import { useSelector } from 'react-redux';
import parse from "html-react-parser";
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmailCard = ({ id }) => {

    const inboxEmail = useSelector((state) => state.mailBox.inboxEmail);
    const item = inboxEmail.flat().find((item) => (item.id === id));
    const { from, subject, mail } = item;

    const userInfo = useSelector((state) => state.mailBox.userInfo);
    const { email } = userInfo;

    const navigate = useNavigate();

    const deleteMailHandler = async () => {
        try {
            await axios.delete(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${email.slice(0, -4,)}/inbox/${id}.json`);
            navigate(-1);
            console.log("Email has been deleted.");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='mx-20 mt-8 px-5 py-5 bg-emerald-50'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-3xl mb-5'>{subject}</h1>
                    <h1 className='my-5'>
                        <span className='text-2xl text-slate-600'>From: </span>
                        <span className='text-2xl font-bold'>{from}</span>
                    </h1>
                    <span className='text-xl'>{parse(`<p>${mail}</p>`)}</span>
                </div>
                <div>
                    <button
                        onClick={deleteMailHandler}
                        className='text-4xl text-red-500'
                    >
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmailCard;