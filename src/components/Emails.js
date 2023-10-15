import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { MdDeleteForever } from "react-icons/md";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addInboxEmails } from "../redux/mailBoxSlice";
import axios from "axios";

const Emails = () => {
    const [mails, setMails] = useState([]);
    const user = useSelector((state) => state.mailBox.userInfo);
    const { email } = user;
    const dispatch = useDispatch();

    const emailReadHandler = async (id) => {
        try {
            await axios.patch(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${email.slice(0, -4,)}/inbox/${id}.json`,
                {
                    emailRead: true,
                },
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const getData = async () => {
                try {
                    const result = await fetch(`https://mail-box-ea5a1-default-rtdb.firebaseio.com/users/${email.slice(0, -4,)}/inbox.json`);
                    const data = await result.json();

                    const newData = [];
                    for (const key in data) {
                        newData.push({
                            id: key,
                            from: data[key].from,
                            subject: data[key].subject,
                            mail: data[key].mail,
                            emailRead: data[key].emailRead,
                        });
                    }

                    setMails(newData);

                    dispatch(addInboxEmails(newData));
                } catch (error) {
                    console.log(error);
                }
            };

            getData();
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [email, dispatch]);

    return (
        <div className="mx-20 mt-8">
            <div className=" bg-black mt-5 h-[1px]"></div>
            <h1 className="text-center text-3xl font-bold text-teal-400">Inbox</h1>
            {mails.map((item) => (
                <div
                    key={item.id}
                    className="flex justify-between mt-5 px-5 py-2 bg-slate-100 rounded-xl"
                >
                    <Link
                        to={`/email/${item.id}`}
                        onClick={() => emailReadHandler(item.id)}
                    >
                        <div className="flex items-center">
                            <div>
                                {item.emailRead === true ? (
                                    <BsCircle className="text-white" />
                                ) : (
                                    <BsCircleFill className="text-blue-500" />
                                )}
                            </div>
                            <div className="mx-8">
                                <p className="text-lg font-semibold">{item.from}</p>
                                {parse(`<p>${item.mail}</p>`)}
                            </div>
                        </div>
                    </Link>
                    <button className="text-4xl">
                        <MdDeleteForever className="text-red-500" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Emails;