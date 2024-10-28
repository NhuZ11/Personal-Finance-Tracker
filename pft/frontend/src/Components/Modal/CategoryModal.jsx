import React, { useState } from 'react';
import Axios from 'axios';

const CategoryModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8000/api/auth/add-category', { name, category, description });
      alert("Category added successfully!");
      onClose(); // Close the modal after success
    } catch (error) {
      alert("Failed to add category");
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Category</h2>
        <form onSubmit={addCategory}>
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
            Type:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded w-full p-2"
              required
            >
              <option value="">-- Select Type --</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Saving">Saving</option>
            </select>
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
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;