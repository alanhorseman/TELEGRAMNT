import { createContext, useState } from "react";
import { getContacts } from "../services/contactServices";


export const ContactsContext = createContext(
  {
    contacts: [],
  }
)

const ContactsContextProvider = ({ children }) => {
  const contacts = getContacts();
  const [contactsState, setContactsState] = useState(contacts);
  
  const provider_values = {
    contacts: contactsState,
  }
  
  return (
    <ContactsContext.Provider value={provider_values}>
      {children}
    </ContactsContext.Provider>
  )
}

export default ContactsContextProvider