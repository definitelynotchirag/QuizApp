import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import TranscriptGenerator from "./pages/transcript";
import QuizGenerator from "./pages/quizgen";
import Quiz from "./components/quiz";

function App() {
  return (
    <div className="w-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/transcript" element={<TranscriptGenerator />} />
          <Route path="/quiz" element={<QuizGenerator />} />
          <Route path="/:quizId" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
