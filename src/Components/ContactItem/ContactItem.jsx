import { Link } from "react-router";
import './ContactItem.css'

export default function ContactItem({ contact }) {
  
  return (
    <div className="contactInfo-container">
      <Link to={`/contact/${contact.id}`} className="contactInfo">
        <div className="contactInfo-imgContainer">
          <img src={contact.profile_picture} alt={contact.name} />
        </div>
        <h3>{contact.name}</h3>
      </Link>
    </div>
  );
}
