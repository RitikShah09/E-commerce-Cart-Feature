"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { asyncAllProduct } from "@/store/Actions/productActions";
import ProductList from "@/components/ProductList";
export default function Home() {
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(asyncAllProduct());
    if (!loggedInUser) redirect("/auth/signin");
  }, [loggedInUser]);
  return (
    <>
      <div className="flex w-screen relative py-10">
        <ProductList />
      </div>
    </>
  );
};
