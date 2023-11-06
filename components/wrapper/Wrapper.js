"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Nav from "../Nav";

const Wrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Nav/>
        {children}
      </Provider>
    </>
  );
};

export default Wrapper;
