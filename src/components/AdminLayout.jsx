import React, { useState } from "react";

import { Outlet, useLocation, Link,  Switch, Route, Redirect } from "react-router-dom";
import { decodeToken } from 'react-jwt'


import logo from "../assets/img/logo.png";

function AdminLayout() {
  const [profileClicked, setProfileClicked] = useState(false)
  const location = useLocation();
  const token = localStorage.getItem('token')
  const user = decodeToken(token)

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/adminlogin";
  };
  return (
    
<div className="main-wrapper">
      <div className="header shadow-md ">
        <div className="header-left">
        
          <img
              src={logo}
              alt="Logo"
              width="100"
              height="90"
            />
          
        </div>

        <a className="mobile_btn" id="mobile_btn">
          <i className="fas fa-bars"></i>
        </a>

        <ul className="nav nav-tabs user-menu">


          <li className="nav-item dropdown main-drop" onClick={(e) => setProfileClicked(!profileClicked)}>
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img src="/assets/user.png" alt="" />
                <span className="status online"></span>
              </span>
            </a>

            <div className={profileClicked ? "bg-white  border-stone-500 shadow-md" : "hidden"}>
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="/assets/user.png"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>{user.fullName}</h6>
                  <p className="text-muted mb-0">{user.role}</p>
                </div>
              </div>
              <div className="">

                <a
                  className="dropdown-item py-1 text-slate-500 pl-2 hover:bg-slate-200 hover:cursor-pointer "
                  href="doctor-profile-settings.html"
                >
                  <i className="fas fa-user-cog mr-2"></i>
                  Profile Settings
                </a>
                <a className="dropdown-item py-1 text-slate-500 pl-2 hover:bg-slate-200 hover:cursor-pointer " onClick={logout}>
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  Logout
                </a>
              </div>

            </div>



          </li>



        </ul>
      </div>

      <div className="sidebar h-[90vh] " id="sidebar mt-2 ">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">

              <li className="menu-title items-center">
                <span>Main</span>
              </li>
              <li
                className={
                  location.pathname === "/admindashboard" ? "active" : ""
                }
              >
                <Link className="text-xs uppercase py-3 font-bold block" to="/admindashboard">
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admindashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i> Dashboard
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/admindashboard/councler" ||
                    location.pathname === "/admindashboard/councler/addcouncler"
                    ? "active"
                    : ""
                }
              >
                <Link className="text-xs uppercase py-3 font-bold block"  to="councler">
                  <i className="feather-users"></i>Counselors
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/admindashboard/blog" ||
                    location.pathname === "/admindashboard/blog/addblog"
                    ? "active"
                    : ""
                }
              >
                <Link  to="blog" className="text-xs uppercase py-3 font-bold block" >
                  <i className="feather-grid"></i> Blog
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/admindashboard/announcment" ||
                    location.pathname ===
                    "/admindashboard/announcment/addAnnouncment"
                    ? "active"
                    : ""
                }
              >
                <Link to="announcment" className="text-xs uppercase py-3 font-bold block" >
                  <i className="feather-alert-octagon"></i>
                  Announcments
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/admindashboard/message" ? "active" : ""
                }
              >
                <Link to="message" className="text-xs uppercase py-3 font-bold block"  >
                  <i className="feather-message-square"></i>
                  Messages
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/admindashboard/counclingcenters"
                    ? "active"
                    : ""
                }
              >
                <Link to="counclingcenters" className="text-xs uppercase py-3 font-bold block"  >
                  <i className="feather-credit-card"></i>
                 Councling Centers
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/admindashboard/regions" ? "active" : ""
                }
              >
                <Link to="regions" className="text-xs uppercase py-3 font-bold block"  >
                  <i className="feather-globe"></i> Regions
                </Link>
              </li>








            </ul>






          </div>
        </div>
      </div>

      <div className="page-wrapper shadow-md border-[.5px] border-blue-100 mt-[60px] p-3 bg-blueGray-700">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;













