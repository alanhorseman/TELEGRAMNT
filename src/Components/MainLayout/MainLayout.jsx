import { Outlet } from "react-router";
import ContactSidebar from "../ContactSidebar/ContactSidebar";

export default function MainLayout() {
  return (
    <div>
      <aside>
        <ContactSidebar/>
      </aside>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}
