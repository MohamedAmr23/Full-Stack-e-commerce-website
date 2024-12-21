import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar.jsx";
import Sidebar from "./component/Sidebar.jsx";
import { Route, Routes } from "react-router-dom";
import Add from "./Pages/Add.jsx";
import List from "./Pages/List.jsx";
import Orders from "./Pages/Orders.jsx";
import Login from "./component/Login.jsx";
import { ToastContainer } from "react-toastify";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("ecommerceToken")
      ? localStorage.getItem("ecommerceToken")
      : ""
  );
  useEffect(() => {
    localStorage.setItem("ecommerceToken", token);
    console.log(token);
  }, [token]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
