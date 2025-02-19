import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-gray-900 text-white flex justify-between p-5 px-32'>
            <div className="logo text-2xl">GetMeAChai!!</div>
            <ul className='flex justify-between gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar
