import { useContext } from "react";
import { ContactsContext } from "../../Context/ContactsContext";
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="new_message" className="new_message"></label>
      <div className="newMessage-inputContainer">
        <div className="inputContainer-iconContainer">
        </div>
        <input
          placeholder="Escribe un mensaje..."
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
