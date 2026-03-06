import './ChatHeader.css'

export default function ChatHeader({ contact_selected }) {
  return (
    <div className="chatHeader-container">
      <img src={contact_selected.profile_picture} alt={contact_selected.name} />
      <div className='chatHeader-infoContact'>
        <h3>{contact_selected.name}</h3>
        <p>{contact_selected.last_time_connection}</p>
      </div>
    </div>
  );
}
