import React, {useState} from 'react'


const CategoryModal = ({onClose})=>{
  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Category</h2>
            <form>
            <label className="block mb-2">
            Category Name:
            <input
              type="String"
            //   value={amount}
            //   onChange={(e) => setAmount(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </label>
          <label className="block mb-2">
              Type:
              <select
                // value={category}
                // onChange={(e) => setCategory(e.target.value)}
                className="border rounded w-full p-2"
              >
                <option value="income">Income</option>
                <option value="expense">Expenses</option>
                <option value="savings">Saving</option>
              </select>
            </label>
            <label className="block mb-2">
              Description:
              <input
                type="text"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                className="border rounded w-full p-2"
                required
              />
            </label>
              <div className="flex justify-between mt-4">
                <button type="button"  className="px-4 py-2 bg-gray-300 text-gray-700 rounded" onClick={onClose}>
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
}

const AdminDashboard = () => {
 const [showModal, setShowModal] = useState(false);
  return (
    <div>
      admin dashboard
      <button className='bg-green-300 text-white' onClick={()=>setShowModal(true)}>add category</button>
      {showModal && (
        <CategoryModal
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default AdminDashboard
