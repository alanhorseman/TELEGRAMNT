import { Routes, Route } from "react-router";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ContactsContextProvider from "./Context/ContactsContext";

function App() {
  return (
    <div>
      <ContactsContextProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact/:contact_id" element={<ContactScreen />} />
        </Routes>
      </ContactsContextProvider>
    </div>
  );
}

export default App;
