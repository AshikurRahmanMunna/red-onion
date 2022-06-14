import { useEffect, useState } from "react";

const useFoodsCategory = (category) => {
  const [categoryFoods, setCategoryFoods] = useState([]);
  useEffect(() => {
    fetch("https://vast-forest-41869.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const foods = data.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );
        setCategoryFoods(foods);
      });
  });
  return [categoryFoods, setCategoryFoods];
};
export default useFoodsCategory;
