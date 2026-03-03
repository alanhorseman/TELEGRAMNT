import { createContext, useState } from "react";
import { getContacts } from "../services/contactServices";

export const ContactsContext = createContext({
  contacts: [],
  addNewMessage: (contact_id, new_message) => {},
});

const ContactsContextProvider = ({ children }) => {
  const contacts = getContacts();
  const [contactsState, setContactsState] = useState(contacts);

  function addNewMessage(contact_id, new_message) {
    setContactsState((current) => {
      return [...current].map((contact) => {
        if (Number(contact.id) === Number(contact_id)) {
          contact.messages.push({
            id: contact.messages.length + 1,
            text: new_message,
            send_by_me: true,
            create_at: new Date().toDateString(),
            is_read: false,
          });
        }
        return contact;
      });
    });
  }

  const provider_values = {
    contacts: contactsState,
    addNewMessage,
  };

  return (
    <ContactsContext.Provider value={provider_values}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
