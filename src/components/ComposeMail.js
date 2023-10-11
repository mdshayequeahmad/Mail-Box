import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ComposeMail = () => {

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const editor = useRef(null);
    const [mail, setMail] = useState('');

    const userInfo = useSelector((state) => state.mailBox.userInfo);
    const { email } = userInfo;

    const submitHandler = async () => {
        try {
            await axios.post(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${to.slice(0, -4)}/inbox.json`,
                {
                    from: email,
                    subject: subject,
                    mail: mail
                });

            await axios.post(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${email.slice(0, -4)}/sent.json`,
                {
                    to: to,
                    subject: subject,
                    mail: mail
                });

            console.log("Email has been sent!");
        } catch (error) {
            console.log(error);
        }

        setTo("");
        setSubject("");
        setMail("");
    };

    return (
        <div>
            <div className='mt-6 mr-20 ml-10'>
                <div className='mt-8'>
                    <div className='bg-gray-800 mt-5 mb-5 h-[1px]'></div>
                    <label className='text-2xl text-slate-400 mx-3'>To:</label>
                    <input
                        className='outline-none border rounded-lg px-4 w-80 h-8'
                        type="email"
                        value={to}
                        required
                        onChange={(e) => setTo(e.target.value)}
                    />
                    <div className='bg-gray-300 mt-5 h-[1px]'></div>
                </div>
                <div className='my-5'>
                    <label className='text-2xl text-slate-400 mx-3'>Subject:</label>
                    <input
                        className='outline-none border rounded-lg px-4 w-72 h-8'
                        type="text"
                        value={subject}
                        required
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <div className='bg-gray-300 mt-5 h-[1px]'></div>
                </div>
                <JoditEditor
                    ref={editor}
                    value={mail}
                    tabIndex={1}
                    onChange={newMail => setMail(newMail)}
                />
                <button
                    onClick={submitHandler}
                    className='bg-teal-500 px-4 py-2 my-5 text-white rounded-md hover:bg-teal-400'
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default ComposeMail;