 import { useState } from "react";
import ChatsPage from "./pages/ChatsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "chats":
        return <ChatsPage />;

      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-[#ececec]">
            <button
              onClick={() => setCurrentPage("chats")}
              className="px-8 py-4 border border-black text-2xl font-bold"
            >
              Let's Vibe
            </button>
          </div>
        );
    }
  };

  return renderPage();
}