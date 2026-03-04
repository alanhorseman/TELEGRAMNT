import "./ContactScreen.css";
import { useContext } from "react";
import { useParams } from "react-router";
import Messages from "../../Components/Messages/Messages";
import { ContactsContext } from "../../Context/ContactsContext";
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext);
  const { contact_id } = useParams();
  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );
  return (
    <div>
      {!contact_selected ? (
        <div>
          <h1>El contacto no existe</h1>
        </div>
      ) : (
        <div className="contactScreen-chat">
          <ChatHeader contact_selected={contact_selected}/>
          <h1>{contact_selected.name}</h1>
          <Messages contact_selected={contact_selected} />
          <NewMessageForm contact_id={contact_id} />
        </div>
      )}
    </div>
  );
}
