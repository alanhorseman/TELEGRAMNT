import { Link } from "react-router";
import './ContactItem.css'
import { useContext } from "react";
import { ContactsContext } from "../../Context/ContactsContext";

export default function ContactItem({ contact }) {
  const { setContact_selected } = useContext(ContactsContext);
  const lastMessage = contact.messages.at(-1);
  
  return (
    <div className="contactInfo-container">
      <Link to={`/contact/${contact.id}`} className="contactInfo" onClick={() => {setContact_selected(contact)}}>
        <div className="contactInfo-imgContainer">
          <img src={contact.profile_picture} alt={contact.name} />
        </div>
        <div className="contactInfo-textContainer">
          <h3>{contact.name}</h3>
          <p className="lastMessage">{lastMessage ? lastMessage.text : ''}</p>
        </div>
      </Link>
    </div>
  );
}
