import React from 'react'

function layout({children}: {children: React.ReactNode}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="text-xl font-bold">InsightCircle</div>
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800">Admin Name</button>
                    <button className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600">Logout</button>
                </div>
            </div>
            {children}
        </div>
    )
}

export default layout
