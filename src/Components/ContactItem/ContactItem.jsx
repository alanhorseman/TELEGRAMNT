import { Link } from "react-router";
import './ContactItem.css'
import { useContext } from "react";
import { ContactsContext } from "../../Context/ContactsContext";

export default function ContactItem({ contact }) {

  const { setContact_selected } = useContext(ContactsContext);
  
  return (
    <div className="contactInfo-container">
      <Link to={`/contact/${contact.id}`} className="contactInfo" onClick={() => {setContact_selected(contact)}}>
        <div className="contactInfo-imgContainer">
          <img src={contact.profile_picture} alt={contact.name} />
        </div>
        <h3>{contact.name}</h3>
      </Link>
    </div>
  );
}
