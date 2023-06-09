import "./App.css";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout/Layout";
import Home from "./components/Home";

function App() {
  localStorage.setItem("token", "sdasdas");
  const token = localStorage.getItem("token");

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index={true} element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
