import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import News from "./components/news/News";
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
