import './SidebarHeader.css';
import MenuIcon from '../Icons/MenuIcon/MenuIcon';
import NewChatIcon from '../Icons/NewChatIcon/NewChatIcon';

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
