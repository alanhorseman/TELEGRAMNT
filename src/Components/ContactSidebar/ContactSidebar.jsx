import { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useSearchParams } from "react-router";
import ContactItem from "../ContactItem/ContactItem";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import { ContactsContext } from "../../Context/ContactsContext";


export default function ContactSidebar() {
  const { contacts } = useContext(ContactsContext);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') || '';
  const filtered = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  });
  
  return (
    <div>
      <h2>Telegram'nt</h2>
      <SidebarHeader />
      <SearchBar />
      <div>
        {
          filtered.map((contact) => {
            return <ContactItem key={contact.id} contact={contact} />
          })
        }
      </div>
    </div>
  );
}
