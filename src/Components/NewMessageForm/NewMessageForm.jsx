import { useContext } from "react";
import { ContactsContext } from "../../Context/ContactsContext";
import AttachIcon from '../Icons/AttachIcon/AttachIcon'
import StickerIcon from '../Icons/StickerIcon/StickerIcon'
import './NewMessageForm.css'

export default function NewMessageForm({ contact_id }) {
  const { addNewMessage } = useContext(ContactsContext);

  function handleSubmit(e) {
    e.preventDefault();
    const new_message = e.target.new_message.value;
    addNewMessage(contact_id, new_message);
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="newMessageForm-form">
      <label htmlFor="new_message" className="new_message"></label>
      <div className="newMessage-inputContainer">
        <div className="inputContainer-iconContainer">
          <div>
            <AttachIcon />
          </div>
          <div className="stickerIcon-container">
            <StickerIcon />
          </div>
        </div>
        <input
          placeholder="Escribe un mensaje"
          name="new_message"
          id="new_message"
          className="newMessage-inputForm"
          required
        />
      </div>
      <button type="submit" className="submitBtn">Enviar</button>
    </form>
  );
}
