import { redirect } from 'next/navigation'
import { currentUser } from "@clerk/nextjs";
import React from 'react'

async function page(){
    const user = await currentUser();
    if (!user) {
      redirect("/sign-in");
    }
  return (
    <div className='container flex max-w-2xl flex-col items-center justify-between gap-4'>
        <h1 className='text-2xl font-bold'>Welcome, <span className='ml-2 font-bold'>{user.firstName}</span> </h1>
    </div>
  )
}

export default page

