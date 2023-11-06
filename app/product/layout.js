"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Product = ({ children }) => {
  const { loggedInUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (!loggedInUser) redirect("/auth/signin");
  }, [loggedInUser]);
  return children;
};

export default Product;
