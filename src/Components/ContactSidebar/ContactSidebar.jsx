import { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useSearchParams } from "react-router";
import ContactItem from "../ContactItem/ContactItem";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import { ContactsContext } from "../../Context/ContactsContext";
import './ContactSidebar.css'


export default function ContactSidebar() {
  const { contacts } = useContext(ContactsContext);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') || '';
  const filtered = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  });
  
  return (
    <div className="contactSidebar-container">
      <div className="sidebarHeader">
        <SidebarHeader />
      </div>
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
