import React from 'react'
import NewChatIcon from '../Icons/NewChatIcon/NewChatIcon'
import MenuIcon from '../Icons/MenuIcon/MenuIcon'
import './SidebarHeader.css'

export default function SidebarHeader() {
  return (
    <div className='sidebarHeader-container'>
      <h1>Telegram'nt</h1>
      <div className='sidebarHeader-iconsContainer'>
        <div className='sidebarHeader-Icon'>
          <NewChatIcon />
        </div>
        <div className='sidebarHeader-Icon'>
          <MenuIcon />
        </div>
      </div>
    </div>
  )
}
