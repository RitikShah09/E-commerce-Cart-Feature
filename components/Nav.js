"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
const Nav = () => {
  const { items } = useSelector((state) => state.cart);
  const { loggedInUser } = useSelector((state) => state.user);
  return (
    <>
      {loggedInUser && (
        <div className="w-full p-10 flex fixed sm:p-5 bg-white top-0 shadow-sm z-10 justify-between">
          <Link href={'/'}>Ecommerce</Link>
          <Link className="flex relative items-center" href={"/product/cart"}>
            {items.length !== 0 && (
              <div className=" absolute right-0 bottom-4 font-medium">
                {items?.length}
              </div>
            )}
            <img src="/icons8-cart-50.png" alt="" className="h-6 w-6" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
