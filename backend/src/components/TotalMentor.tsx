'use client'

import React, { useEffect, useState } from 'react'
import MentorCard from './MentorCard'
import axios from 'axios'
import Loader from './Loader'

function TotalMentor() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function handleFetchMentorList() {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/api/admin/total-mentor')
      setLoading(false)
      
      console.log(response.data)
      if (response.data.status == true) {
        setData(response.data.data)
      } else {
        alert('Member List is empty')
      }


    } catch (error) {
      alert('Unable to list the mentor')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetchMentorList()
  }, [])
  return (
    <div className='w-full h-full flex justify-center items-center'>
      {
        loading ? <Loader></Loader> : (
          data.map((mentor: any) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              bio={mentor.bio}
              expertIn={mentor.expertIn}
              image={mentor.profilePicture}
            ></MentorCard>
          ))
        )
      }
    </div>
  )
}

export default TotalMentor
