import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { handleInit } from "./actions/handleInitAction";
import "./App.css";
import MainLayout from "./components/mainLayout/MainLayout";

import Login from "./pages/Login/Login";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const store = useSelector((state) => state);
  useEffect(() => {
    dispatch(handleInit());
  }, []);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [location.pathname]);
  console.log(store);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
