import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/mailBoxSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        {
          email: email,
          password: password,
        },
      );
      console.log("User has successfully signed in.");
      dispatch(
        addUser({
          email: response.data.email,
          idToken: response.data.idToken,
        }),
      );

      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="bg-white h-96 space-y-3 w-[350px] flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black/30">
        <form onSubmit={submitHandler} className="space-y-4">
          <div className="flex justify-center">
            <h1 className="font-bold text-3xl">LOGIN</h1>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <input
              className="outline-none h-10 px-2 border rounded-sm w-full"
              type="text"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="font-semibold">Password</p>
            <input
              className="outline-none h-10 px-2 border rounded-sm w-full"
              type="password"
              placeholder="Password"
              minLength="6"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <button className="bg-teal-500 w-full h-10 rounded-lg text-white hover:bg-teal-400 duration-200">
              LOGIN
            </button>
          </div>
          <div className="pt-1">
            <p>
              Don't have account?{" "}
              <span className=" font-semibold">
                <Link to="/signup">SignUp</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;