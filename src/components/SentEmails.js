import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSentEmails } from '../redux/mailBoxSlice';
import parse from 'html-react-parser';
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';

const SentEmails = () => {

    const [mails, setMails] = useState([]);
    const user = useSelector((state) => state.mailBox.userInfo);
    const { email } = user;
    const dispatch = useDispatch();

    const deleteEmailHandler = async (id) => {
        try {
            await axios.delete(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${email.slice(0, -4,)}/sent/${id}.json`);
            console.log("Email has been deleted.");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetch(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${email.slice(0, -4,)}/sent.json`);
                const data = await result.json();

                const newData = [];
                for (const key in data) {
                    newData.push({
                        id: key,
                        to: data[key].to,
                        subject: data[key].subject,
                        mail: data[key].mail,
                    });
                }

                setMails(newData);

                dispatch(addSentEmails(newData));
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [mails, email, dispatch]);

    return (
        <div className='mt-8 mx-20'>
            <div className=" bg-black mt-5 h-[1px]"></div>
            <h1 className="text-center text-3xl font-bold text-teal-400">Sent</h1>
            {mails.map((item) => (
                <div
                    key={item.id}
                    className="flex justify-between mt-5 px-5 py-2 bg-slate-100 rounded-xl"
                >
                    <div className="flex items-center">
                        <div className="mx-8">
                            <h1 className='text-xl'>{item.subject}</h1>
                            <p className="text-lg font-semibold mb-3">{item.to}</p>
                            {parse(`<p>${item.mail}</p>`)}
                        </div>
                    </div>
                    <button className="text-4xl">
                        <MdDeleteForever
                            onClick={() => deleteEmailHandler(item.id)}
                            className="text-red-500"
                        />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default SentEmails;