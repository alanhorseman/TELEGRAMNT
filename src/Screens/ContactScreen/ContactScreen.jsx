import "./ContactScreen.css";
import { useContext } from "react";
import { useParams } from "react-router";
import Messages from "../../Components/Messages/Messages";
import { ContactsContext } from "../../Context/ContactsContext";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm";

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext);
  const { contact_id } = useParams();
  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );
  return (
    <div className="test1">
      {!contact_selected ? (
        <div>
          <h1>El contacto no existe</h1>
        </div>
      ) : (
        <div className="contactScreen-chat">
          <div className="contactScreen-chatHeader-container">
            <ChatHeader contact_selected={contact_selected}/>
          </div>
          <div>

            <div className="contactScren-messagesContainer">
              <Messages contact_selected={contact_selected} />
            </div>
            <div className="contactScreen-newMessageForm">
              <NewMessageForm contact_id={contact_id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
