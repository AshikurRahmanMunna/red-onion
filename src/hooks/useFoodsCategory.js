import { useEffect, useState } from "react";

const useFoodsCategory = (category) => {
  const [categoryFoods, setcategoryFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const foods = data.filter((p) => p.category.toLowerCase() === category.toLowerCase());
        setcategoryFoods(foods);
      });
  });
  return [categoryFoods, setcategoryFoods];
};
export default useFoodsCategory;
