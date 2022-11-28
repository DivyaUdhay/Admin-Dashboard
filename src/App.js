import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Card from "./Card";
import User from "./User";
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Product from "./Product";
import Createuser from "./Creatuser";
import Portal from "./Portal";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Portal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
