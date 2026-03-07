import './ChatHeader.css'
import { useNavigate } from 'react-router';
import useWindowSize from '../../hooks/useWindowSize';

export default function ChatHeader({ contact_selected }) {
  const isMobile = useWindowSize();
  const navigate = useNavigate();

  return (
    <div className="chatHeader-container">
      {isMobile && (
        <button className='backBtn' onClick={() => navigate('/')}>
          ←
        </button>
      )}
      <img src={contact_selected.profile_picture} alt={contact_selected.name} />
      <div className='chatHeader-infoContact'>
        <h3>{contact_selected.name}</h3>
        <p>{contact_selected.last_time_connection}</p>
      </div>
    </div>
  );
}
