import { Outlet } from "react-router";
import ContactSidebar from "../ContactSidebar/ContactSidebar";
import SideNav from "../SideNav/SideNav";
import './MainLayout.css'

export default function MainLayout() {
  return (
    <div className="asideMain-container">
      <div className="asideContainer">
        <aside className="aside-NavBtn">
          <SideNav />
        </aside>
        <aside className="aside-Contacts">
          <ContactSidebar/>
        </aside>
      </div>

      <main className="main">
        <Outlet/>
      </main>
    </div>
  )
}
