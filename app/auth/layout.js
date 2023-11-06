'use client';
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Auth = ({ children }) => {
  const { loggedInUser } = useSelector((state) => state.user);
useEffect(() => {
  if (loggedInUser) redirect("/");
}, [loggedInUser]);
  return children;
};

export default Auth;
