import { useContext } from "react";
import { ContactsContext } from "../../Context/ContactsContext";


export default function NewMessageForm({contact_id}) {
  const { addNewMessage } = useContext(ContactsContext);
  
  function handleSubmit(e){
    e.preventDefault();
    const new_message = e.target.new_message.value;
    addNewMessage(contact_id, new_message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new_message" className="new_message"></label>
      <textarea placeholder="Escribe un mensaje..." name='new_message' id='new_message' required/>
      <button type="submit">Enviar</button>
    </form>
  );
}
