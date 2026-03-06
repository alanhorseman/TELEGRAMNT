import { Outlet } from "react-router";
import ContactSidebar from "../ContactSidebar/ContactSidebar";
import SideNav from "../SideNav/SideNav";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="asideMain-container">
      <aside className="aside-navBtn">
        <SideNav />
      </aside>

      <aside className="aside-contacts">
        <ContactSidebar />
      </aside>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
