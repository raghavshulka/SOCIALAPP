import React from "react";
import Navbar from "./components/Navbar";
import Chatbox1 from "./components/Chatbox1";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="flex h-screen overflow-hidden ">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/chatbox" element={<Chatbox1 />} />
         


          <Route path="/profile" element={<Profile />} />

          
          <Route path="/signin" element={<Signin />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
