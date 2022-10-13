import React from "react";
import logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useState } from "react";
import {useTranslation } from 'react-i18next'




function Header() {

  const {t,i18n} = useTranslation()
 
  const [profileClicked,setProfileClicked]=useState(false)

  const token = localStorage.getItem("token");
  const location = useLocation();
  const user = decodeToken(token);
  console.log(user)
  if (user) {
    
    if (!user) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="header top-0 sticky shadow-md z-10 ">
      <nav className="navbar navbar-expand-lg header-nav px-10">
        <div className="navbar-header">
          <a id="mobile_btn" href="#">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link to="/adminlogin" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/" className="menu-logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
            <a id="menu_close" className="menu-close" href="#">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav ml-4">
            <li
              className={location.pathname == "/" ? "has-submenu  active" : ""}
            >
              <Link to="/" className="text-base">
                {t('Home')}
              </Link>
            </li>
          
        
            <li 
             
             className={
               location.pathname == "/counclersearch" ? "has-submenu active" : ""
             }>
               <Link className="text-base" to="/counclersearch">
                Counsellor
              </Link>
              
            </li>
            <li
              className={
                location.pathname == "/announcment" ? "has-submenu active" : ""
              }
            >
              <Link className="text-base" to="/announcment">
                Announcments
              </Link>
            </li>

            <li
              className={
                location.pathname == "/blogs" ? "has-submenu active" : ""
              }
            >
              <Link className="text-base" to="/blogs">
                Blogs
              </Link>
            </li>
            <li
              className={
                location.pathname == "/contactus" ? "has-submenu active" : ""
              }
            >
              <Link className="text-base" to="/contactus">
                Contact Us{" "}
              </Link>
            </li>
            <li
              className={
                location.pathname == "/AboutUs" ? "has-submenu active" : ""
              }
            >
              <Link className="text-base" to="/AboutUs">
                About Us{" "}
              </Link>
            </li>
            <li
              className={
                location.pathname == "/whatis" ? "has-submenu active" : ""
              }
            >
              <Link className="text-base" to="/whatis">
              What Is SGBV{" "}
              </Link>
            </li>
            <li
              className={
                location.pathname == "/LegalAidService" ? "has-submenu active" : ""
              }
            >
              <Link className="text-base" to="/LegalAidService">
              Legal Aid Service{" "}
              </Link>
            </li>
            
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
          <li className="nav-item contact-item">
           

           
            <div className="header-contact-img">
              <i className="far fa-hospital"></i>
            </div>

            <div className="header-contact-detail mr-4 ">
              <p className="contact-header">Contact</p>
              <p className="contact-info-header"> +251905</p>
          
            </div>
     
         


            {user == null ? (
              <li className="nav-item">
                <Link className="nav-link header-login" to="login">
                  login 
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown has-arrow logged-item"   onClick={()=>setProfileClicked(!profileClicked)}>
                <a
             
                  className="dropdown-toggle nav-link"
            
                >
                  <span className="user-img">
                    <img
                      className="rounded-circle"
                      src={ user.role!='Victim' && user.role!='Admin'?   user._doc.img:"/assets/user.png"}
                      width="31"
                      alt="Darren Elder"
                    />
                  </span>
                </a>
                <div className={profileClicked?"bg-white mt-24 border-stone-500 shadow-md":"hidden"}>
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                       src={user.role!='Admin'&& user.role!='Victim'?   user._doc.img:"/assets/user.png"}
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
              
                  <a className="dropdown-item py-1 text-slate-500 pl-2 hover:bg-slate-200 hover:cursor-pointer " onClick={logout}>
                  <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                  </a>
                  </div>
                
                </div>
              </li>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
