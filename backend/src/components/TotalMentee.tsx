'use client'

import React, { useEffect, useState } from "react";
import MenteeCard from "./MenteeCard";
import axios from "axios";
import Loader from "./Loader";

const TotalMentee = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function handleFetchMentee() {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/api/admin/total-mentee')
      setLoading(false)

      console.log(response.data)

      if(response.data.status == true) {
        setData(response.data.data)
      } else {
        alert("Mentee List is empty")
      }
    } catch (error) {
      alert("Unable to fetch the Mentee list")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetchMentee()
  }, [])

  return (
    <div className="w-full h-full flex ">
      {
        loading ? <Loader></Loader> : (
          data.map((mentee: any) => (
            <MenteeCard
            key={mentee.key}
        name={mentee.name}
        email={mentee.email}
        planType={mentee.planType}
        registeredDate={mentee.createdAt}
      ></MenteeCard>
          ))
        )
      }
    </div>
  );
};

export default TotalMentee

