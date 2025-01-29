'use client'
import React from 'react'

function AdminName() {
  return (
    <span>
      {localStorage.getItem('admin-name')}
    </span>
  )
}

export default AdminName
