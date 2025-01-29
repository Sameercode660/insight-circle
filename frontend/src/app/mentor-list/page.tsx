import SectionHeading from '@/components/Heading'
import { ThreeDCardDemo } from '@/components/ThreeDCardDemo'
import React from 'react'

function page() {
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
                <ThreeDCardDemo
                    name='Anjana'
                    bio="I am a full stack developer"
                    expertIn='React'
                    image='https://images.pexels.com/photos/10320391/pexels-photo-10320391.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                ></ThreeDCardDemo>
            </div>
        </>
    )
}

export default page
