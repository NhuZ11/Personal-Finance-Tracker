import React, { useEffect, useState } from "react";
import Axios from "axios";
import CategoryModal from "./Modal/CategoryModal";
import UpdateCategoryModal from "./Modal/UpdateCategoryModal";

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category

  useEffect(() => {
    Axios.get("http://localhost:8000/api/auth/get-category").then((res) => {
      setCategories(res.data.data.categories);
    });
  }, []);
  console.log(categories)
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
      {showUpdateModal && (
        <UpdateCategoryModal
          onClose={() => setShowUpdateModal(false)}
          category={selectedCategory} // Pass the selected category here
        />
      )}

      <div className="mt-5">
        <h1 className="font-bold">Expense Category</h1>
        {categories.map((val, key) => {
          if (val.category === "Expense") {
            return (
              <div key={key} className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <tr className="bg-gray-100 border-b ">
                      <td className="px-4 py-2 text-gray-700">{val.name}</td>
                      <td className="px-4 py-2 flex justify-left space-x-2 ">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 mx-1"
                          onClick={() => {
                            setSelectedCategory(val); // Set the selected category here
                            setShowUpdateModal(true);
                          }}
                        >
                          Update
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
          return null; // Return null if the condition is not met
        })}
      </div>

      <div className="mt-5">
        <h1 className="font-bold">Income Category</h1>
        {categories.map((val, key) => {
          if (val.category === "Income") {
            return (
              <div key={key} className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <tr className="bg-gray-100 border-b ">
                      <td className="px-4 py-2 text-gray-700">{val.name}</td>
                      <td className="px-4 py-2 flex justify-left space-x-2 ">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 mx-1"
                          onClick={() => {
                            setSelectedCategory(val); // Set the selected category here
                            setShowUpdateModal(true);
                          }}
                        >
                          Update
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
          return null; // Return null if the condition is not met
        })}
      </div>

      <div className="mt-5">
        <h1 className="font-bold">Saving Category</h1>
        {categories.map((val, key) => {
          if (val.category === "Saving") {
            return (
              <div key={key} className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <tr className="bg-gray-100 border-b ">
                      <td className="px-4 py-2 text-gray-700">{val.name}</td>
                      <td className="px-4 py-2 flex justify-left space-x-2 ">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 mx-1"
                          onClick={() => {
                            setSelectedCategory(val); // Set the selected category here
                            setShowUpdateModal(true);
                          }}
                        >
                          Update
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
          return null; // Return null if the condition is not met
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
