"use client"
import React, { useState } from 'react'
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
    const [showDropdown, setshowDropdown] = useState(false)
    return (
        <nav className='bg-gray-900 text-white flex justify-between items-center p-3 px-16'>
            <Link href={'/'} className="logo text-2xl flex justify-center items-center"><span>Get Me A Chai!</span><img src="/tea.gif" className='w-10' alt="" /></Link>
            {/* <ul className='flex justify-between gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}
            <div className='relative'>
                {session && <>
                    <button onClick={() => setshowDropdown(!showDropdown)} onBlur={()=> setTimeout(() => {
                        setshowDropdown(false)
                    }, 300)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> Welcome {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div id="dropdown" className={`z-10 ${showDropdown ? "" : "hidden"} absolute left-24 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/Dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</a>
                            </li>
                            <li onClick={() => signOut()}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </>}
                {/* {session && <Link href={'/dashboard'}>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'>Dashboard</button>
                </Link>} */}
                {/* {session && <button onClick={()=>signOut()} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'>Logout</button>} */}
                {!session && <Link href={'/login'}>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'>Login</button>
                </Link>}
            </div>
        </nav>
    )
}

export default Navbar
