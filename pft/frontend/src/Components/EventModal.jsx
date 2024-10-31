import React, {useState} from 'react'

// Event Modal Component
const EventModal = ({ onClose, onSave, selectedDate, url }) => {
    const [eventType, setEventType] = useState("income");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const eventData = {
        eventType,
        amount: parseFloat(amount),
        description,
        category,
        date: selectedDate.toISOString(),
      };
  
      // Send data to backend
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
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
                onChange={(e) => setEventType(e.target.value)}
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
                <option value="income">Category 1</option>
                <option value="expense">Category 2</option>
                <option value="savings">Category 3</option>
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
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Save Event
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default EventModal


...fsgjaslfjasdlfjlas;djkf