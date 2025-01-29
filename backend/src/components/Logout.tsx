import React from 'react'

function Logout() {

    async function Logout() {
        localStorage.removeItem('admin-id')
        localStorage.removeItem('admin-name')
        window.location.href = '/login'
    }
    
    return (
        <>
            <button className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600" onClick={Logout} >Logout</button>
        </>
    )
}

export default Logout
