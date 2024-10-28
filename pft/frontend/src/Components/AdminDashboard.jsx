import React, { useEffect, useState } from "react";
import Axios from "axios";
import CategoryModal from "./Modal/CategoryModal";

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/auth/get-category").then((res) => [
      setCategory(res.data.data.categories),
    ]);
  });

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button
        className="bg-green-300 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Add Category
      </button>
      {showModal && <CategoryModal onClose={() => setShowModal(false)} />}

      <div className="mt-5">
        <h1 className="font-bold">Expense Category</h1>
        {category.map((val, key) => {
          
          if (val.category === "Expense") {
          
            return (
              <div key={key} className="">
                <h1>{val.name}</h1>
              </div>
            );
          }
        })}
      </div>

      <div className="mt-5">
        <h1 className="font-bold">Income Category</h1>
        {category.map((val, key) => {
          
          if (val.category === "Income") {
          
            return (
              <div key={key} className="">
                <h1>{val.name}</h1>
              </div>
            );
          }
        })}
      </div>

      <div className="mt-5">
        <h1 className="font-bold">Saving Category</h1>
        {category.map((val, key) => {
          
          if (val.category === "Saving") {
          
            return (
              <div key={key} className="">
                <h1>{val.name}</h1>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
