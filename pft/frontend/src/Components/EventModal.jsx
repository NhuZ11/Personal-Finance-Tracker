import React, { useState, useContext } from 'react';
import axios from 'axios';
import CategoryContext from '../Context/CategoryContext';

// Event Modal Component
const EventModal = ({ onClose, onSave, selectedDate, url }) => {
  const [eventType, setEventType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { categories, selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = {
      eventType,
      amount: parseFloat(amount),
      description,
      category,
      date: selectedDate.toISOString(),
    };

    try {
      const response = await axios.post(url, eventData, {
        headers: { 'Content-Type': 'application/json' },
      });

      // Call onSave to update the state in the parent component
      onSave(eventData);
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  // Update selected category based on event type
  const handleEventTypeChange = (e) => {
    const newEventType = e.target.value;
    setEventType(newEventType);
    setSelectedCategory(newEventType); // Update the selected category based on event type
  };


  const eventSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      eventType,
      amount: parseFloat(amount),
      description,
      category,
      date: selectedDate.toISOString(),
    };

    // Define different URLs based on the event type
    const eventUrls = {
      Income: `${url}/income`,
      Expense: `${url}/expense`,
      Saving: `${url}/saving`,
    };

    try {
      // Send data to the appropriate endpoint based on event type
      const response = await axios.post(eventUrls[eventType], eventData, {
        headers: { 'Content-Type': 'application/json' },
      });

      // Call onSave to update the state in the parent component
      onSave(eventData);
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };



  // Format the selected date to a readable string
  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : '';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Event for {formattedDate}</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Event Type:
            <select
              value={eventType}
              onChange={handleEventTypeChange}
              className="border rounded w-full p-2"
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Saving">Saving</option>
            </select>
          </label>

          <label className="block mb-2">
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded w-full p-2"
            >
              {categories.map((val, key) => (
                val.category === selectedCategory && (
                  <option key={key} value={val.name}>{val.name}</option>
                )
              ))}
            </select>
          </label>
          
          <label className="block mb-2">
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" onClick={eventSubmit}>
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
