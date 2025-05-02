import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 px-10 pt-10 pb-5 flex flex-col w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        <SearchInput />
        <div className='divider px-3 my-0.5'></div>
        <Conversations />
        <div className='divider px-3 my-1'></div>
        <LogoutButton />
    </div>
  )
}

export default Sidebar