"use client";
import { useSelector } from "react-redux";

const Categories = () => {
  const { categories } = useSelector((state) => state.product);

  return (
    <>
      <div className="w-1/4">
        {categories &&
          categories.map((category, i) => {
            return (
              <div key={i}>
                <h1>{category}</h1>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Categories;
