'use client'

import { useRouter } from "next/navigation";
import React from "react";

function AdminPanel() {

  const router = useRouter()

  function navigateAddMentor() {
    router.push('./admin-panel/add-mentor')
  }

  function navigateTotalMentor() {
    router.push('./admin-panel/total-mentor')
  }

  function navigateTotalMentee() {
    router.push('./admin-panel/total-mentee')
  }

  function navigateDeleteMentee() {
    router.push('./admin-panel/delete-mentee')
  }

  function navigateDeleteMentor() {
    router.push('./admin-panel/delete-mentor')
  }

  function navigateFreeMentee() {
    router.push('./admin-panel/free-mentee')
  }

  function navigateSubscribedMentee() {
    router.push('./admin-panel/subscribed-mentee')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-300">
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <button className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1" onClick={navigateAddMentor}>
          <h3 className="text-lg font-semibold text-gray-800">Add Mentor</h3>
        </button>
        <button className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1" onClick={navigateTotalMentor}>
          <h3 className="text-lg font-semibold text-gray-800">Total Mentor</h3>
        </button>
        <button className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1" onClick={navigateTotalMentee}>
          <h3 className="text-lg font-semibold text-gray-800">Total Mentee</h3>
        </button>
        <button className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1" onClick={navigateDeleteMentor}>
          <h3 className="text-lg font-semibold text-gray-800">Delete Mentor</h3>
        </button>
        <button className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1" onClick={navigateDeleteMentee}>
          <h3 className="text-lg font-semibold text-gray-800">Delete Mentee</h3>
        </button>
        <button className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1" onClick={navigateSubscribedMentee}>
          <h3 className="text-lg font-semibold text-gray-800">Subscribed Mentee</h3>
        </button>
        <button className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1" onClick={navigateFreeMentee}>
          <h3 className="text-lg font-semibold text-gray-800">Free Mentee</h3>
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;