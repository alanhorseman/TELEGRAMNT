import './SidebarHeader.css';
import MenuIcon from '../Icons/MenuIcon/MenuIcon';
import NewChatIcon from '../Icons/NewChatIcon/NewChatIcon';
import { useLocation, useNavigate } from 'react-router';

export default function SidebarHeader({title, to}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  return (
    <div className='sidebarHeader-container'>
      {pathname !== '/' ? <button onClick={() => navigate(to)}>back</button> : <div className='displeyNone'></div>}
      <h1>{title}</h1>
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
