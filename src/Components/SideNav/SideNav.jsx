import './SideNav.css';
import CallIcon from '../Icons/CallIcon/CallIcon';
import ChatIcon from '../Icons/ChatIcon/ChatIcon';
import MediaIcon from '../Icons/MediaIcon/MediaIcon';
import StatusIcon from '../Icons/StatusIcon/StatusIcon';
import ChannelsIcon from '../Icons/ChannelsIcon/ChannelsIcon';
import SettingsIcon from '../Icons/SettingsIcon/SettingsIcon';
import CommunityIcon from '../Icons/CommunityIcon/CommunityIcon';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { ContactsContext } from '../../Context/ContactsContext';

export default function SideNav() {
  const navigate = useNavigate();
  const { setContact_selected } = useContext(ContactsContext)
  const handleNavigate = (path) => {
    setContact_selected(null);
    navigate(path);
  }


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
        <button onClick={() => handleNavigate('/settings')}><SettingsIcon /></button>
      </div>
    </nav>
  )
}
