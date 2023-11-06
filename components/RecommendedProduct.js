"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
const Recommended = () => {
  const { categories } = useSelector((state) => state.product);

  return (
    <>
      <div className="w-full grid grid-cols-3 sm:grid-cols-1 space-x-3 space-y-4">
        {categories &&
          categories.map((product, i) => {
            return (
              <Link
                className=" shadow-md p-2"
                href={`/product/${product.id}`}
                key={i}
              >
                <h1>{product.title}</h1>

                <img
                  src={product.thumbnail}
                  className="h-[250px] w-full object-cover"
                  alt="product"
                />
                <div className="flex justify-between w-full">
                  <h1>{product.brand}</h1>
                  <h1> ${product.price}</h1>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Recommended;
