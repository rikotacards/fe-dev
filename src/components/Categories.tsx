import React from "react";
import { categories } from "../categories";
import { CategoryAccordion } from "./CategoryAccordion";

export const Categories: React.FC = () => {
  
  return (
    <div>
      {categories.map((category) => {
        return(
        <CategoryAccordion key={category.categoryName} categoryName={category.categoryName} problems={category.problems}  />);
      })}
    </div>
  );
};
