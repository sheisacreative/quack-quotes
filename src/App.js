import "./styles/index.css";
import Navbar from "./components/sections/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quote from "./pages/Quote";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
