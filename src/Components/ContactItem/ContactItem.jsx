import { Link } from "react-router";

export default function ContactItem({ contact }) {
  
  return (
    <div>
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
