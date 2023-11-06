"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "@/store/Reducers/cartReducers";
const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const updateCartProduct = (e, item) => {
    dispatch(updateCart({ ...item, quantity: e }));
  };
  return (
    <>
      {items && items.length < 1 ? (
        <h1 className="text-center font-bold py-20">Cart Is Empty</h1>
      ) : (
        <div className="flex mt-10 sm:mt-0 pt-20 space-y-2 flex-col py-5">
          {items &&
            items.map((product, i) => {
              return (
                <div
                  key={i}
                  className="flex space-x-3  sm:space-x-2 sm:text-sm justify-center items-center"
                >
                  <img
                    src={product.thumbnail}
                    className="h-[100px] sm:w-[80px] sm:h-[80px] w-[100px] rounded-sm object-cover"
                    alt="product"
                  />
                  <h1 className="font-bold">{product.title}</h1>
                  <div className="flex justify-between w-[200px]">
                    <h1 className="font-semibold">{product.brand}</h1>
                    <h1> ${product.price * product.quantity}</h1>
                    <h1>
                      Quantity:
                      <select
                        onChange={(e) =>
                          updateCartProduct(e.target.value, product)
                        }
                      >
                        <option defaultValue={product.quantity}>{product.quantity}</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Cart;
