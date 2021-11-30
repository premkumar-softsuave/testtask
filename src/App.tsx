import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
