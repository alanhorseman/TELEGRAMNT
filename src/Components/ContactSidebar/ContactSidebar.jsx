import { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'

export default function ContactSidebar() {
  const { contacts } = useContext(ContactsContext)
  return (
    <div>
      <h2>Telegram'nt</h2>
      <div>
        {
          contacts.map((contact) => {
            return (
              <Link to={`/contact/${contact.id}`} key={contact.id}>
                <img src={contact.profile_picture} alt={contact.name} style={{width: '200px'}} />
                <h3>{contact.name}</h3>
                <span>{contact.last_time_connection}</span>
                <br />
                <hr />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
