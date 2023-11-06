// import axios from "@/utils/axios";
import axios from "axios";
import {
  allProduct,
  isError,
  removeError,
  productById,
  productByCategories,
} from "../Reducers/productReducers";
import { toast } from "react-toastify";

export const asyncAllProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");
    // console.log(data.products);
    dispatch(allProduct(data.products));
  } catch (error) {
    console.log(error)
    // dispatch(isError(error.response.data.message));
  }
};

export const asyncProductById = (id) => async (dispatch, getState) => {
  try {
    // dispatch(removeError());
    const { data } = await axios.get('https://dummyjson.com/products/'+id);
    dispatch(productById(data));
  } catch (error) {
    // dispatch(isError(error.response.data.message));
  }
};

export const asyncProductByCategory = (category) => async (dispatch, getState) => {
  try {
    dispatch(removeError());
    const { data } = await axios.get(
      "https://dummyjson.com/products/category/" + category
    );
    dispatch(productByCategories(data.products));
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(isError(error.response.data.message));
  }
};