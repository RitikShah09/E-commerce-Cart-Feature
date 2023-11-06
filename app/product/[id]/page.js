"use client";

import {
  asyncProductByCategory,
  asyncProductById,
} from "@/store/Actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/Reducers/cartReducers";
import Recommended from "@/components/RecommendedProduct";

const page = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    if (selectedProduct) {
      dispatch(asyncProductByCategory(selectedProduct.category));
    }
  }, []);
  useEffect(() => {
    dispatch(asyncProductById(id));
  }, []);

  const index = items.findIndex((item) => item.id === selectedProduct.id);

  const addCart = () => {
    dispatch(addToCart({ ...selectedProduct, quantity: 1 }));
  };
  return (
    <div className="p-10">
      {selectedProduct && (
        <div className="flex mt-12 sm:mt-2 sm:flex-col space-x-4">
          <img
            className="pt-10"
            src={selectedProduct.thumbnail}
            alt="product"
          />

          <div className="py-5 mt-14 sm:mt-0">
            <h1 className=" font-bold my-2">{selectedProduct.title}</h1>
            <h1 className="mt-2">{selectedProduct.description}</h1>
            <h1 className="mt-2">Rating : {selectedProduct.rating}</h1>

            <div className="flex my-3">
              <h1 className="font-bold">{selectedProduct.brand}</h1>
              <h1 className="ml-10">${selectedProduct.price}</h1>
            </div>
            {index == -1 ? (
              <h1
                className="bg-yellow-400 w-fit px-4 py-2 mt-5 sm:mt-0 font-semibold rounded-md"
                onClick={addCart}
              >
                Add To Cart
              </h1>
            ) : (
              <h1 className="bg-green-400 w-fit px-4 py-2 font-semibold rounded-md">
                Added To Cart
              </h1>
            )}
          </div>
        </div>
      )}
      <h1 className="my-5 font-semibold">Recommeded Products</h1>
      <Recommended />
    </div>
  );
};

export default page;
