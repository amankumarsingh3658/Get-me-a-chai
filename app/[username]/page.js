import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative flex justify-center items-center flex-col'>
        <img className='object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-time=1741046400&token-hash=O2aN8llkh-uA_l6GR3HNDYaf9DmF5v5skluRN_B6JTM%3D" alt="" />
        <img className='object-cover rounded-full w-32 h-32 relative bottom-16 border-black border-2' src="https://imgs.search.brave.com/_3iTduMBOgJRvEKtiopcxZtdhjcB7dBR7uaaHzuAYho/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/ODg5NDEwNi9waG90/by9jYXQtcG9ydHJh/aXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpSVnZZM3Ey/SEJDSXY2U0tVY1pD/cDJZakVtU2dyM1Y2/cHR5bmlZejg3SXc9" alt="" />
        <div className='items-center justify-center relative bottom-12 flex flex-col gap-2'>
          <div className='font-bold'>
            @{params.username}
          </div>
          <div className='text-slate-400'>
            Creating animated arts for VTT&apos;s
          </div>
          <div className='text-slate-400'>
            9719 members . 82 posts . $15,450/release
          </div>
        </div>
        <div className="payments flex gap-3 w-[80%] pb-6">
          <div className="supporters w-1/2 flex flex-col gap-2 justify-center items-center bg-slate-900 p-3">
            <h2 className='text-bold text-lg'>Supporters</h2>
            <div>
              <ul>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
                <li className='flex items-center gap-2'><img width={33} src="avatar.gif" alt="" />Shubham donated $30 with a message </li>
              </ul>
            </div>
          </div>
          <div className="makepayment w-1/2 flex flex-col justify-start items-start bg-slate-900 gap-3 p-16">
            <div className='flex items-center flex-col gap-3'>
              <div className='text-center'>
                <h2>
                  Make Payment
                </h2>
              </div>
              <input type="text" className='w-96 p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              <input type="text" className='w-96 p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <div className='flex gap-3 items-center'>
                <input type="text" className='w-96 p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              </div>
              <button className='w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'>Pay</button>
            </div>
            <div className='flex gap-3'>
              <button className='bg-slate-800 p-3 rounded-lg'>$10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>$20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>$30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
