import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ChatRoom } from "./pages/ChatRoom";
import { LanguageProvider } from "./context/LanguageProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import "./styles/global.css";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
