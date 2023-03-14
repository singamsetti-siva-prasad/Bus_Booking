import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import JourneyForm from "./components/journeyForm/JourneyForm";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
