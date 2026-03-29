import "./ContactSidebar.css";
import { useContext } from "react";
import { useSearchParams } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import ContactItem from "../ContactItem/ContactItem";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import { ContactsContext } from "../../Context/ContactsContext";
import SidebarTemplate from "../SidebarTemplate/SidebarTemplate";

export default function ContactSidebar() {
  const { contacts } = useContext(ContactsContext);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const filtered = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <SidebarTemplate
      header={<SidebarHeader title="Telegram'nt" />}
      searchBar={<SearchBar placeholder="Buscar un chat o iniciar uno nuevo" />}
    >
      {filtered.map((contact) => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </SidebarTemplate>
  );
}
