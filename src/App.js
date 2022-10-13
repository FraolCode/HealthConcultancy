// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";



import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";

import Adminlogin from "./pages/common/Adminlogin";

import CounclerLayout from "./components/CounclerLayout";
import CounclerHome from "./pages/councler/CounclerHome";
import AdminLayout from "./components/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import Region from "./pages/admin/Region";
import CounclingCenters from "./pages/admin/CounclingCenters";
import Blog from "./pages/admin/Blog";
import AddBlog from "./pages/admin/AddBlog";
import Contactus from "./pages/Contactus";
import Messages from "./pages/admin/Messages";
import Announcment from "./pages/admin/Announcment";
import AddAnnouncment from "./pages/admin/AddAnnouncment";
import { Councler } from "./pages/admin/Councler";
import AddCouncler from "./pages/admin/AddCouncler";
import VictimHome from "./pages/Victim/VictimHome";
import CounclerSearch from "./pages/Victim/CounclerSearch";
import CounclerProfile from "./pages/councler/CounclerProfile";
import VictimRequest from "./pages/councler/VictimRequest";
import MyPatient from "./pages/councler/MyPatient";
import VictimLayout from "./components/VictimLayout";
import MyCouncler from "./pages/Victim/MyCouncler";
import CounclerAppointment from "./pages/councler/CounclerAppointment";
import VictimAppointment from "./pages/Victim/VictimAppointment";
import CounclerProfileSetting from "./pages/councler/CounclerProfileSetting";
import VictimProfileSetting from "./pages/Victim/VictimProfileSetting";
import ChangePassword from "./pages/councler/changePassword";
import VictimChangePassword from "./pages/Victim/VictimChangePassword";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";

import LegalAidService from "./pages/LegalAidService";
import Whatis from "./pages/whatis";
import AboutUs from "./pages/AboutUs";



import Announcments from "./pages/Announcment"
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

import "./assets/styles/tailwind.css";

import './i18n'









const tele = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tele.ready();
  });
  
  return (
    <BrowserRouter>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

<ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contactus" element={<Contactus/>}/>
          <Route path="counclersearch"element={<CounclerSearch/>}/>
          <Route path="register" element={<Register />} />
          <Route path="CounclerProfile" element={<CounclerProfile/>}/>
          <Route path="BlogDeetails" element={<BlogDetails/>} />
          <Route path="announcment" element={<Announcments/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="LegalAidService" element={<LegalAidService/>} />
          <Route path="whatis" element= {<Whatis/>} />
          <Route path="AboutUs" element = {<AboutUs/>}/>
      
          <Route path="/councler" element={<CounclerLayout />}>
            <Route index element={<CounclerHome />} />
            <Route path="Dashboard" element={<CounclerHome/>} />
            <Route path="victimrequest" element={<VictimRequest/>} />
            <Route path="mypatient" element={<MyPatient/>} />
            <Route path="appointment" element={<CounclerAppointment />} />
            <Route path="profilesetting" element={<CounclerProfileSetting/>} />
            <Route path="changePassword" element={<ChangePassword/>} />
          </Route>

          <Route path="/victim" element={<VictimLayout />}>
            <Route index element={<VictimHome />} />
            <Route path="Dashboard" element = {<VictimHome/>}/>
            <Route path="mycouncler" element={<MyCouncler/>} />
            <Route path="appointment" element={<VictimAppointment/>}/>
            <Route path="profilesetting" element={<VictimProfileSetting/>} />
            <Route path="changePassword" element={<VictimChangePassword/>}/>
         
      
          </Route>
        </Route>
        <Route path="adminlogin" element={<Adminlogin />} />

        <Route path="/admindashboard" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="regions" element={<Region />} />
          <Route path="message" element={<Messages/>}/>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/addblog" element={<AddBlog />} />

          <Route path="announcment" element={<Announcment/>} />
          <Route path="announcment/addAnnouncment"element={<AddAnnouncment/>} />

          <Route path="councler" element={<Councler />} />
          <Route path="councler/addcouncler" element={<AddCouncler />} />
          
          <Route path="counclingcenters" element={<CounclingCenters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
