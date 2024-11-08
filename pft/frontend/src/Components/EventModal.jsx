import React, { useState, useContext } from "react";
import Axios from "axios";
import CategoryContext from "../Context/CategoryContext";

// Event Modal Component
const EventModal = ({ onClose, onSave, selectedDate, url }) => {
  const [eventType, setEventType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(CategoryContext);
  
    console.log(selectedDate)
  console.log(eventType);
  const eventSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare event data
    const eventData = {
      eventType,
      amount: parseFloat(amount),
      description,
      category,
      date: selectedDate.toISOString(),
    };
  
    // Retrieve the authentication token
    const token = localStorage.getItem("token"); // or your method of storing the token
  
    try {
      let endpoint = "";
      
      // Determine the correct endpoint based on the event type
      if (eventType === "Income") {
        endpoint = "http://localhost:8000/api/auth/add-incomes"; // Change to your income endpoint
      } else if (eventType === "Expense") {
        endpoint = "http://localhost:8000/api/auth/add-expenses"; // Existing expense endpoint
      } else if (eventType === "Saving") {
        endpoint = "http://localhost:8000/api/auth/add-savings"; // Change to your saving endpoint
      }
  
      // Make the API request
      const response = await Axios.post(endpoint, eventData, {
        headers: {
          "auth-token": token, // Include the token in the request headers
        },
      });
  
      alert(`${eventType} added successfully!`);
      onClose(); // Close the modal after success
    } catch (error) {
      alert(`Failed to add ${eventType.toLowerCase()}`);
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };
  

  // Update selected category based on event type
  const handleEventTypeChange = (e) => {
    const newEventType = e.target.value;
    setEventType(newEventType);
    setSelectedCategory(newEventType); // Update the selected category based on event type
  };

  // Format the selected date to a readable string
  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : "";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Add Event for {formattedDate}
        </h2>
        <form onSubmit={eventSubmit}>
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
              {categories.map(
                (val, key) =>
                  val.category === selectedCategory && (
                    <option key={key} value={val.name}>
                      {val.name}
                    </option>
                  )
              )}
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
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
