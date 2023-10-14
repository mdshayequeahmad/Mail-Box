import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import parse from "html-react-parser";
import axios from 'axios';

const SentEmailCard = () => {

    const { id } = useParams();
    const sentEmail = useSelector((state) => state.mailBox.sentEmail);
    const item = sentEmail.flat().find((item) => (item.id === id));
    const { to, subject, mail } = item;

    const userInfo = useSelector((state) => state.mailBox.userInfo);
    const { email } = userInfo;

    const navigate = useNavigate();

    const deleteMailHandler = async (id) => {
        try {
            await axios.delete(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${email.slice(0, -4,)}/sent/${id}.json`);
            console.log("Email has been deleted.");
            navigate(-1);
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
                        <span className='text-2xl text-slate-600'>To: </span>
                        <span className='text-2xl font-bold'>{to}</span>
                    </h1>
                    <span className='text-xl'>{parse(`<p>${mail}</p>`)}</span>
                </div>
                <div>
                    <button
                        onClick={() => deleteMailHandler(id)}
                        className='text-4xl text-red-500'
                    >
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SentEmailCard;