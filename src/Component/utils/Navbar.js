import React, {useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const [show, setShow] = useState(false)

  const showingMenu = () => {
    show == true ? setShow(false) : setShow(true)    
  }

  return (
    <div className='w-full'>
      {
        show == false &&
    <div className='border-b-2 mb-5'>
      <div className='flex items-center p-2 '>
        <button type="submit" className='p-2' onClick={showingMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <NavLink to="/">
          <h1 className='ml-4 text-xl'>OpenCode</h1>
        </NavLink>
      </div>
    </div>
    }
    { show == true &&
    <div className='w-full min-h-screen absolute bg-indigo-900 text-slate-100 lg:w-1/4'>
      <div className='flex items-center p-2 '>
        <button type="submit" className='p-2' onClick={showingMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <NavLink to="/">
          <h1 className='ml-4 text-xl'>OpenCode</h1>
        </NavLink>
      </div>
      <h1 className='pb-2 pl-5 mt-6 text-lg border-solid border-b-2 border-grey-500'>Menu</h1>
      <div className='flex flex-col'>
        <NavLink to="/create" className="flex p-3 py-4 hover:bg-slate-300 hover:text-black" onClick={showingMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <p className='ml-4'>Create</p>
        </NavLink>
        <NavLink to="/running" className="flex p-3 py-4 hover:bg-slate-300 hover:text-black" onClick={showingMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className='ml-4'>Running</p>
        </NavLink>
        <NavLink to="/deadline" className="flex p-3 py-4 hover:bg-slate-300 hover:text-black" onClick={showingMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <p className='ml-4'>Deadline</p>
        </NavLink>
        <NavLink to="/history" className="flex p-3 py-4 hover:bg-slate-300 hover:text-black" onClick={showingMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className='ml-4'>History</p>
        </NavLink>
      </div>
      <h1 className='pb-2 pl-5 mt-14 text-lg border-solid border-b-2 border-grey-500'>Other</h1>
      <div className=''>
        <div className='flex p-3 py-4 hover:bg-slate-300 hover:text-black'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
          </svg>
          <p className='ml-4'>Notification</p>
        </div>
        <div className='flex p-3 py-4 hover:bg-slate-300 hover:text-black'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className='ml-4'>About</p>
        </div>
      </div>
    </div>
    }
    </div>
  );
};
