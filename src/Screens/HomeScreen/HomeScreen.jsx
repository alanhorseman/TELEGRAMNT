import './HomeScreen.css';
import ChatEmptyState from "../../Components/ChatEmptyState/ChatEmptyState";

export default function HomeScreen() {
  return (
    <div className="homeScreen-emptyState">
      <ChatEmptyState />
    </div>
  )
}
