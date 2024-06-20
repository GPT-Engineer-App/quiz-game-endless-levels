import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Quiz from "./pages/Quiz.jsx";
import LevelSelection from "./pages/LevelSelection.jsx";
import Settings from "./pages/Settings.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Ranking from "./pages/Ranking.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/level-selection" element={<LevelSelection />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;