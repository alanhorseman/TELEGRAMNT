import ChatIcon from '../Icons/ChatIcon/ChatIcon'
import StatusIcon from '../Icons/StatusIcon/StatusIcon'
import ChannelsIcon from '../Icons/ChannelsIcon/ChannelsIcon'
import CommunityIcon from '../Icons/CommunityIcon/CommunityIcon'
import MediaIcon from '../Icons/MediaIcon/MediaIcon'
import SettingsIcon from '../Icons/SettingsIcon/SettingsIcon'
import './SideNav.css'

export default function SideNav() {
  return (
    <nav className='aside-navIconContainer'>
      <div className='navIcon-top iconsColumns'>
        <button><ChatIcon /></button>
        <button><StatusIcon /></button>
        <button><ChannelsIcon /></button>
        <button><CommunityIcon /></button>
      </div>
      <div className='navIcon-bottom iconsColumns'>
        <button><MediaIcon /></button>
        <button><SettingsIcon /></button>
      </div>
    </nav>
  )
}
