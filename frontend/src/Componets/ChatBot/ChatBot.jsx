import React from 'react'
import SideBar from './SideBar/SideBar'
import InputBox from './InputBox/InputBox'

function ChatBot() {
  return (
    <div className='flex h-screen p-8 pb-12'>
      <SideBar />
      <InputBox />
    </div>
  )
}

export default ChatBot