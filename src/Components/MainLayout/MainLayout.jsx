import { Outlet } from "react-router";
import ContactSidebar from "../ContactSidebar/ContactSidebar";
import SideNav from "../SideNav/SideNav";

export default function MainLayout() {
  return (
    <div>
      <SideNav />
      <aside>
        <ContactSidebar/>
      </aside>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}
