'use client'
import SectionHeading from '@/components/Heading'
import { ThreeDCardDemo } from '@/components/ThreeDCardDemo'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
    const router = useRouter()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Access localStorage inside useEffect
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin === 'false') {
            router.push('/auth/login');
        } else {
            handleFetchMentors()
        }
    }, [router]);

    async function handleFetchMentors() {
        try {
            const response = await axios.get('http://localhost:3000/api/user/fetch-mentor')
            setLoading(false)
            setData(response.data.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
            alert('Unable to fetch mentors')
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <SectionHeading title='Chat with our mentors'></SectionHeading>
            <div className='flex justify-center items-center flex-wrap gap-5'>
            {
                loading === true ? <div>Loading</div> : (
                    data?.map((item: any) => (
                        <ThreeDCardDemo
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            bio={item.bio}
                            expertIn={item.expertIn}
                            image={item.profilePicture}
                        ></ThreeDCardDemo>
                    ))
                )
            }
            </div>
        </>
    )
}

export default page
