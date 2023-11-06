"use client";
import Link from "next/link";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "@/store/Reducers/authReducers";
const page = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIn = () => {
    dispatch(createUser({ name: 'Ritik', email: email, }));
  };
  const GuestLogin = () => {
    dispatch(createUser({ name: "Guest", email: 'guest@gmail.com' }));
  }
  return (
    <div className="w-full h-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex py-5 px-12 items-center flex-col justify-center">
      <div className="text-left w-64 ">
        <h6 className=" text-xl font-medium">
          Welcome, <span className="text-[#5851DB]">Back</span>
        </h6>
        <p className=" text-sm">Welcome back! Please enter your details.</p>
      </div>
      <TextInput
        placeholder="Enter Your Email"
        type="text"
        label="Email"
        className="my-2 flex flex-col"
        value={email}
        setValue={setEmail}
      />
      <TextInput
        placeholder="Enter Your Password"
        type="password"
        label="Password"
        className="mb-3 mt-3 flex flex-col"
        value={password}
        setValue={setPassword}
      />
      <button
        className=" my-3 w-64 font-medium border-none rounded-md py-2 px-0 bg-[#5851DB] text-white"
        onClick={(e) => {
          e.preventDefault();
          logIn();
        }}
      >
        Login
      </button>

      <button
        className=" my-3 w-64 font-medium border-none rounded-md py-2 px-0 bg-[#b34040] text-white"
        onClick={(e) => {
          e.preventDefault();
          GuestLogin();
        }}
      >
        Get Guest Credentials
      </button>

      <h5 className=" text-base">
        Don't have an account?
        <Link
          className=" no-underline text-[#5851DB] font-medium"
          href="/auth/signup"
        >
          SignUp
        </Link>
      </h5>
    </div>
  );
};

export default page;
