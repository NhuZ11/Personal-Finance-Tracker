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
    fetchCategories();
  }, []);

  // Fetch categories from the server
  const fetchCategories = async () => {
    try {
      const res = await Axios.get("http://localhost:8000/api/auth/get-category");
      setCategories(res.data.data.categories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // Delete category function
  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await Axios.delete(`http://localhost:8000/api/auth/delete-category/${id}`);
        setCategories(categories.filter((category) => category._id !== id));
        alert("Category deleted successfully!");
      } catch (err) {
        console.error("Error deleting category:", err);
        alert("Failed to delete category. Please try again.");
      }
    }
  };

//update category type
const updateCategoryType = async (id, newType) => {
  try {
    // Optimistically update the type in local state before making the backend request
    const updatedCategories = categories.map((category) =>
      category._id === id ? { ...category, type: newType } : category
    );
    setCategories(updatedCategories); // Update state immediately

    // Send the update request to the backend
    const response = await Axios.put(`http://localhost:8000/api/auth/update-type/${id}`, {
      type: newType,
    });

    if (response.status === 200) {
      alert("Category updated successfully!");
      fetchCategories(); // Optionally refresh the categories to reflect any other backend changes
    } else {
      console.error("Failed to update category");
      alert("Failed to update category, please try again.");
    }
  } catch (error) {
    console.error("Error updating category:", error);
    alert("An error occurred while updating the category. Please try again.");
  }
};

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
  <h1 className="font-bold">Expense Categories</h1>
  {categories.map((val, key) => {
    if (val.category === "Expense") {
      return (
        <div key={key} className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <tbody>
              <tr className="bg-gray-100 border-b">
                <td className="px-4 py-2 text-gray-700">{val.name}</td>
                <td className="px-4 py-2">
                  {/* Dropdown to set Need or Want */}
                  <select
                    value={val.type} // Assuming "type" is the field in your backend for Need/Want
                    onChange={(e) => {
                      const updatedType = e.target.value;
                      updateCategoryType(val._id, updatedType); // Function to handle the backend update
                    }}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="Need">Need</option>
                    <option value="Want">Want</option>
                  </select>
                </td>
                <td className="px-4 py-2 flex justify-left space-x-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 mx-1"
                    onClick={() => {
                      setSelectedCategory(val); // Set the selected category here
                      setShowUpdateModal(true);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2"
                    onClick={() => deleteCategory(val._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return null;
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
                        <button
                          className="bg-red-500 text-white px-4 py-2"
                          onClick={() => deleteCategory(val._id)}
                        >
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
                        <button
                          className="bg-red-500 text-white px-4 py-2"
                          onClick={() => deleteCategory(val._id)}
                        >
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
