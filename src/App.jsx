import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import no_supported_mobie from "../src/assets/no_supported_mobile.png";

import "./App.css"

function App() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
      } 
    });
   

    const checkMobie = () => {
      setMobile(window.innerWidth < 700);
    };
    checkMobie();
    window.addEventListener("resize", checkMobie);
    return () => {
      window.removeEventListener("resize", checkMobie);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mobile ? (
    <div className="no-support-mobile">
      <img src={no_supported_mobie} alt="no_supported_mobie" />
    </div>
  ) : (
    <>
      <ToastContainer theme="dark" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
