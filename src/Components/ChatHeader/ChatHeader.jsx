import './ChatHeader.css'
import { useNavigate } from 'react-router';
import useWindowSize from '../../hooks/useWindowSize';
import { useContext, useEffect } from 'react';
import { ContactsContext } from '../../Context/ContactsContext';

export default function ChatHeader({ contact_selected }) {
  const isMobile = useWindowSize();
  const navigate = useNavigate();

  const { setContact_selected } = useContext(ContactsContext);

  const handleBack = () => {
    setContact_selected(null);
    navigate('/');
  }

  return (
    <div className="chatHeader-container">
      {isMobile && (
        <button className='backBtn' onClick={handleBack}>
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
