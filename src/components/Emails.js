import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { MdDeleteForever } from 'react-icons/md';

const Emails = () => {

    const [mails, setMails] = useState([]);
    const user = useSelector((state) => state.mailBox.userInfo);
    const { email } = user;

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetch(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${email.slice(0, -4)}/inbox.json`);
                const data = await result.json();

                const newData = [];
                for (const key in data) {
                    newData.push({
                        id: key,
                        from: data[key].from,
                        subject: data[key].subject,
                        mail: data[key].mail,
                    })
                }

                setMails(newData);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [mails, email]);

    return (
        <div className='mx-20 mt-8'>
            <div className=' bg-black mt-5 h-[1px]'></div>
            <h1 className='text-center text-3xl font-bold text-teal-400'>Inbox</h1>
            {mails.map((item) => (
                <div
                    key={item.id}
                    className='flex justify-between mt-5 px-5 py-2 bg-slate-100 rounded-xl'>
                    <div>
                        <p className='text-lg font-semibold'>{item.from}</p>
                        <p>{item.subject}</p>
                    </div>
                    {parse(`<p>${item.mail}</p>`)}
                    <button className='text-4xl'>
                        <MdDeleteForever className='text-red-500' />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Emails;