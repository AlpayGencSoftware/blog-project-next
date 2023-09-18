import React from 'react'
import Image from "next/image"



export default function MyProfilePicture() {
  return (
    <section className='w-full mx-auto'>
        <Image src="/assets/img/family.JPG" 
        className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        width={400} 
        height={400} 
        alt='My Family'
        priority={true}
        />
    </section>
  )
}
