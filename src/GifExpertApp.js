import React, { useState } from "react"; //rafc
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["Goku", "Super Campeones", "Caballeros del sodiaco"];
  const [categories, setCategories] = useState(["street fighter"]);

  //const handleAgregar = () => setCategories([...categories, "Thundercats"]);
  //const handleAgregar = () => setCategories((cat) => [...cat, "Thundercats"]);

  return (
    <div>
      <h2>Web GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => (
          //return <li key={category}>{category}</li>;
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
