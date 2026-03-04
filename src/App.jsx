import { Routes, Route } from "react-router";
import MainLayout from "./Components/MainLayout/MainLayout";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ContactsContextProvider from "./Context/ContactsContext";

function App() {
  return (
    <ContactsContextProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="contact/:contact_id" element={<ContactScreen />} />
        </Route>
      </Routes>
    </ContactsContextProvider>
  );
}

export default App;
