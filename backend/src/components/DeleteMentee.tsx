import React from 'react'

function DeleteMentee() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md shadow-lg rounded-2xl bg-white">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Delete Mentee</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter mentee's email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteMentee
