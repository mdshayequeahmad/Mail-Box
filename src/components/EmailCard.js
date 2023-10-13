import React from 'react';
import { useSelector } from 'react-redux';
import parse from "html-react-parser";

const EmailCard = ({ id }) => {

    const emailData = useSelector((state) => state.mailBox.emailData);
    const email = emailData.flat().find((item) => (item.id === id));
    const { from, subject, mail } = email;

    return (
        <div className='mx-20 mt-8'>
            <div className='mx-30 px-5 py-5 bg-emerald-50 h-full'>
                <h1 className='text-3xl mb-5'>{subject}</h1>
                <h1 className='my-5'>
                    <span className='text-2xl text-slate-600'>From: </span>
                    <span className='text-2xl font-bold'>{from}</span>
                </h1>
                <span className='text-xl'>{parse(`<p>${mail}</p>`)}</span>
            </div>
        </div>
    )
}

export default EmailCard;