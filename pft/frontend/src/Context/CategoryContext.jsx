import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from "axios";

// Create the CategoryContext
const CategoryContext = createContext();

// Provider component
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories from API when component mounts
  useEffect(() => {
    Axios.get("http://localhost:8000/api/auth/get-category").then((res) => {
      setCategories(res.data.data.categories);
    });
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
