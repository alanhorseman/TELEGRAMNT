import "./MainLayout.css";
import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import SideNav from "../SideNav/SideNav";
import useWindowSize from "../../hooks/useWindowSize";
import ContactSidebar from "../ContactSidebar/ContactSidebar";
import { ContactsContext } from "../../Context/ContactsContext";
import SettingsSidebar from "../Settings/SettingsSidebar/SettingsSidebar";
import AppBlocked from "../Settings/Sections/Privacy/AppBlocked/AppBlocked";
import InfoSidebar from "../Settings/Sections/Privacy/InfoSidebar/InfoSidebar";
import StateSidebar from "../Settings/Sections/Privacy/StateSidebar/StateSidebar";
import ChatsSettings from "../Settings/Sections/Chats/ChatsSettings/ChatsSettings";
import GroupsSidebar from "../Settings/Sections/Privacy/GroupsSidebar/GroupsSidebar";
import AccountSettings from "../Settings/Sections/Account/AccountSidebar/AccountSidebar";
import BlockedContacts from "../Settings/Sections/Privacy/BlockedContacts/BlockedContacts";
import PrivacySettings from "../Settings/Sections/Privacy/PrivacySettings/PrivacySettings";
import LastSeenSidebar from "../Settings/Sections/Privacy/LastSeenSidebar/LastSeenSidebar";
import MessagesDuration from "../Settings/Sections/Privacy/MessagesDuration/MessagesDuration";
import ProfilePhotoSidebar from "../Settings/Sections/Privacy/ProfilePhotoSidebar/ProfilePhotoSidebar";
import NotificationSettings from "../Settings/Sections/Notification/NotificationSettings/NotificationSettings";
import HelpFeedbackSettings from "../Settings/Sections/HelpFeedback/HelpFeedbackSettings/HelpFeedbackSettings";

export default function MainLayout() {
  const isMobile = useWindowSize();
  const { pathname } = useLocation();
  const { contact_selected, setContact_selected } = useContext(ContactsContext);
  const isSection = pathname !== '/';
  
  useEffect(() => {
    if(isSection){
      setContact_selected(null);
    }
  }, [pathname]);
  
  const sidebarContent = {
    '/settings': <SettingsSidebar />,
    '/settings/account': <AccountSettings />,
    '/settings/privacy': <PrivacySettings />,
    '/settings/privacy/last-seen': <LastSeenSidebar />,
    '/settings/privacy/profile-photo': <ProfilePhotoSidebar />,
    '/settings/privacy/info': <InfoSidebar />,
    '/settings/privacy/state': <StateSidebar />,
    '/settings/privacy/messages-duracion': <MessagesDuration />,
    '/settings/privacy/groups': <GroupsSidebar />,
    '/settings/privacy/blocked-contacts': <BlockedContacts />,
    '/settings/privacy/app-blocked': <AppBlocked />,
    '/settings/chats': <ChatsSettings />,
    '/settings/notification': <NotificationSettings />,
    '/settings/help-feedback': <HelpFeedbackSettings />,
  }
  
  const currentSidebar = sidebarContent[pathname] || <ContactSidebar />

  return (
    <div className="asideMain-container">
      {(!isMobile || (!contact_selected && !isSection) ) && (
        <>
          <aside className="aside-navBtn">
            <SideNav />
          </aside>

          <aside className="aside-contacts">
            {currentSidebar}
            <div className="line-bottom"></div>
          </aside>
        </>
      )}

      {(!isMobile || contact_selected || isSection) && (
        <main className="main">
          <Outlet />
        </main>
      )}
    </div>
  );
}
