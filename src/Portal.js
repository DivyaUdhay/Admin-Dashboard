import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Card from "./Card";
import User from "./User";
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Product from "./Product";
import Createuser from "./Creatuser";
function Portal(){
    return(<>
   
   <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
          <Routes>
          
          <Route path="/portal/dashboard" element={<Dashboard />}/>
          <Route path="/portal/user" element={<User/>}/>
          <Route path="/portal/user/create" element={<Createuser/>}/>
          <Route path="/portal/product" element={<Product/>}/>

          
            </Routes>
            </div>
        </div>
      </div>
    </div>
    
    </>)
}
export default Portal