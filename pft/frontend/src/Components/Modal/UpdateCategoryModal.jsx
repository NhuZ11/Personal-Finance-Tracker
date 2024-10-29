import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const UpdateCategoryModal = ({ onClose, category }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

    console.log(category._id)


  // Prefill form with existing category data
  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description);
    }
  }, [category]);

  const UpdateCategory = async (e) => {
    e.preventDefault();

    try {
      await Axios.put(`http://localhost:8000/api/auth/update-category/${category._id}`, {
        name,
        description,
      });
      alert('Category updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error updating category:', error);
      alert('Failed to update category');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Update Category</h2>
        <form onSubmit={UpdateCategory}>
          <label className="block mb-2">
            Category Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </label>
          
          <label className="block mb-2">
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </label>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Update Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategoryModal;
