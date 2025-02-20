"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
    const { data: session } = useSession()
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email}<br />
    //         <button onClick={() => signOut()}>Sign Out</button>
    //     </>
    // }
    return (
        <nav className='bg-gray-900 text-white flex justify-between items-center p-3 px-32'>
            <div className="logo text-2xl flex justify-center items-center"><span>Get Me A Chai!</span><img src="/tea.gif" className='w-10' alt="" /></div>
            {/* <ul className='flex justify-between gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}
            <div>
                {session && <Link href={'/dashboard'}>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'>Dashboard</button>
                </Link>}
                {session && <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'>Logout</button>}
                {!session && <Link href={'/login'}>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'>Login</button>
                </Link>}
            </div>
        </nav>
    )
}

export default Navbar
