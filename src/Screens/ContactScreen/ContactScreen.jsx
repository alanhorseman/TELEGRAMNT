import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'

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
            <div>
              {
                contact_selected.messages.map(m => {
                  return (
                    <div key={m.id}>
                      {m.send_by_me
                      ? <h3>Enviado por Mi</h3>
                    : <h3>Enviado por {contact_selected.name}</h3>}
                      <p>{m.text}</p>
                      <span>{m.create_at}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}
