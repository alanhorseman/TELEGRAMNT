import './ChatHeader.css'
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useWindowSize from '../../hooks/useWindowSize';
import { ContactsContext } from '../../Context/ContactsContext';
import LeftArrowIcon from '../Icons/LetfArrowIcon/LeftArrowIcon'

export default function ChatHeader({ contact_selected }) {
  const isMobile = useWindowSize();
  const navigate = useNavigate();

  const { setContact_selected } = useContext(ContactsContext);

  const handleBack = () => {
    setContact_selected(null);
    navigate('/');
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape'){
        handleBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {window.removeEventListener('keydown', handleKeyDown)};
  }, [contact_selected]);

  return (
    <div className="chatHeader-container">
      {isMobile && (
        <button className='backBtn' onClick={handleBack}>
          <LeftArrowIcon />
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
