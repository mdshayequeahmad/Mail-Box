import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSentEmails } from '../redux/mailBoxSlice';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const SentEmails = () => {

    const [mails, setMails] = useState([]);
    const user = useSelector((state) => state.mailBox.userInfo);
    const { email } = user;
    const dispatch = useDispatch();

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
                    <Link to={`/sent/${item.id}`}>
                        <div className="mx-8">
                            <p className="text-lg font-semibold mb-1">{item.to}</p>
                            {parse(`<p>${item.mail}</p>`)}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SentEmails;