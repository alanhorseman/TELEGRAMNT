import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import Messages from '../../Components/Messages/Messages';
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm';

export default function ContactScreen() {
  const {contacts} = useContext(ContactsContext);
  const {contact_id} = useParams();
  const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))
  return (
    <div>
      <ContactSidebar/>
      {
        ! contact_selected 
        ? <div>
            <h1>El contacto no existe</h1>
          </div>
        : <div>
            <h1>
              {contact_selected.name}
            </h1>
            <Messages contact_selected={contact_selected}/>
            <NewMessageForm/>
          </div>
      }
    </div>
  )
}
