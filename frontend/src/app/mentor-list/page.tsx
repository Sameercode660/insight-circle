'use client'
import SectionHeading from '@/components/Heading'
import { ThreeDCardDemo } from '@/components/ThreeDCardDemo'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
    const router = useRouter()
    const [data, setData] = useState()
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
                <ThreeDCardDemo
                    name='Anjana'
                    bio="I am a full stack developer"
                    expertIn='React'
                    image='https://images.pexels.com/photos/10320391/pexels-photo-10320391.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                ></ThreeDCardDemo>
               {
                loading ?
               }
            </div>
        </>
    )
}

export default page
