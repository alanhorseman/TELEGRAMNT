import "./MainLayout.css";
import { useContext } from "react";
import { Outlet } from "react-router";
import SideNav from "../SideNav/SideNav";
import useWindowSize from "../../hooks/useWindowSize";
import ContactSidebar from "../ContactSidebar/ContactSidebar";
import { ContactsContext } from "../../Context/ContactsContext";

export default function MainLayout() {
  const isMobile = useWindowSize();
  const { contact_selected } = useContext(ContactsContext);

  return (
    <div className="asideMain-container">
      {(!isMobile || !contact_selected ) && (
        <>
          <aside className="aside-navBtn">
            <SideNav />
          </aside>

          <aside className="aside-contacts">
            <ContactSidebar />
            <div className="line-bottom"></div>
          </aside>  
        </>
      )}

      {(!isMobile || contact_selected) && (
        <main className="main">
          <Outlet />
        </main>
      )}
    </div>
  );
}
