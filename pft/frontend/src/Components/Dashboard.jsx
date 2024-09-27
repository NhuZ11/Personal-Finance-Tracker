import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full'>
      <div className='flex'>
      <div className="container w-[500px] bg-green-500 ">
            <h1 className='text-center font-bold text-black-600 text-2xl'>Menu</h1>
            <ul className='flex-col-reverse text-center p-5 '>
                <li className='py-4 text-xl'>Option 1</li>
                <li className='py-4 text-xl'>Option 1</li>
                <li className='py-4 text-xl'>Option 1</li>
                <li className='py-4 text-xl'>Option 1</li>
                <li className='py-4 text-xl'>Option 1</li>
            </ul>
        </div>
        <div className="container">
            <h1 className='text-center'>Dashboard</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
