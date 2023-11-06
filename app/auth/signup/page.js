"use client";
import Link from "next/link";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "@/store/Reducers/authReducers";
const page = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const signUp = () => {
    dispatch(createUser({ name: name, email: email }));
  };
   const GuestSignUp = () => {
     dispatch(createUser({ name: "Guest", email: "guest@gmail.com" }));
   };
  return (
    <div className="w-full h-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex py-5 px-12 items-center flex-col justify-center">
      <h6 className=" text-2xl mb-4 font-medium w-64 text-left">
        Sign<span className="text-[#5851DB]">Up</span>
      </h6>
      <TextInput
        placeholder="Enter Your Name"
        type="text"
        label="Name"
        className="my-2 flex flex-col"
        value={name}
        setValue={setName}
      />
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
          signUp();
        }}
      >
        SignUp
      </button>
      <button
        className=" my-3 w-64 font-medium border-none rounded-md py-2 px-0 bg-[#b34040] text-white"
        onClick={(e) => {
          e.preventDefault();
          GuestSignUp();
        }}
      >
        Get Guest Credentials
      </button>

      <h5 className=" text-base">
        Already have an account?
        <Link
          className=" no-underline text-[#5851DB] font-medium"
          href="/auth/signin"
        >
          SignIn
        </Link>
      </h5>
    </div>
  );
};

export default page;
