"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
const ProductList = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <div className="w-full py-20 sm:py-7 grid grid-cols-3 sm:grid-cols-1 space-x-3 px-10 space-y-4">
        {products &&
          products.map((product, i) => {
            return (
              <Link className=" shadow-md p-2" href={`/product/${product.id}`} key={i}>
                <h1 className="py-2">{product.title}</h1>

                <img
                  src={product.thumbnail}
                  className="h-[250px] w-full object-cover"
                  alt="product"
                />
                <div className="flex mt-2 justify-between w-full">
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

export default ProductList;
