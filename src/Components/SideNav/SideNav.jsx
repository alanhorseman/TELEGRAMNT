import './SideNav.css';
import CallIcon from '../Icons/CallIcon/CallIcon';
import ChatIcon from '../Icons/ChatIcon/ChatIcon';
import MediaIcon from '../Icons/MediaIcon/MediaIcon';
import StatusIcon from '../Icons/StatusIcon/StatusIcon';
import ChannelsIcon from '../Icons/ChannelsIcon/ChannelsIcon';
import SettingsIcon from '../Icons/SettingsIcon/SettingsIcon';
import CommunityIcon from '../Icons/CommunityIcon/CommunityIcon';

export default function SideNav() {
  return (
    <nav className='aside-navIconContainer'>
      <div className='navIcon-top iconsColumns'>
        <button><ChatIcon /></button>
        <button><StatusIcon /></button>
        <button className='channelIcon'><ChannelsIcon /></button>
        <button><CommunityIcon /></button>
        <button className='callIcon'><CallIcon /></button>
      </div>
      <div className='navIcon-bottom iconsColumns'>
        <button><MediaIcon /></button>
        <button><SettingsIcon /></button>
      </div>
    </nav>
  )
}
