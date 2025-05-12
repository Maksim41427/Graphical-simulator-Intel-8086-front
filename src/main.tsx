import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from "./App";
import Login from "./pages/Login";
import Program from "./pages/Program";

const  root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/program" element={<Program />} />
    </Routes>
  </BrowserRouter>
);