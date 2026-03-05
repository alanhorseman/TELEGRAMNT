import { Link } from "react-router";
import './ContactItem.css'

export default function ContactItem({ contact }) {
  
  return (
    <div className="contactInfo-container">
      <Link to={`/contact/${contact.id}`}>
        <img src={contact.profile_picture} alt={contact.name} />
        <h3>{contact.name}</h3>
        <span>{contact.last_time_connection}</span>
        <br />
        <hr />
      </Link>
    </div>
  );
}
