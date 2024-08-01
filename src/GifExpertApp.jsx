import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import "./App.css";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory]);
  };

  return (
    <>
      <h1 className="title">Gif Search App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
