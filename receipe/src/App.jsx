import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import Chatbot from "./components/Chatbot";
import Receipe from "./components/Receipe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/receipe" element={<Receipe />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
