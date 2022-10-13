import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { decodeToken, isExpired } from "react-jwt";


function VictimLayout() {







  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = decodeToken(token);
  console.log(user)
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/adminlogin";
  };
  return (


    <>


      <div className="breadcrumb-bar mt-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title"> {location.pathname.split("/")[location.pathname.split('/').length - 1].toUpperCase()}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="/assets/user.png"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>{user.fullName.toUpperCase()}</h3>
                      <div className="patient-details">
                        <h5 className="mb-0">
                          Patient , {user.email}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li
                        className={
                          location.pathname == "/victim" ? "active" : ""
                        }
                      >
                        <Link to="/victim">
                          <i className="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname == "/victim/mycouncler"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="mycouncler">
                          <i className="fas fa-user-injured"></i>
                          <span>My Councler</span>
                        </Link>
                      </li>

                      <li className={
                        location.pathname == "/victim/appointment" ? "active" : ""
                      }>
                        <Link to="appointment">
                          <i className="fas fa-calendar-check"></i>
                          <span>Appointments</span>

                        </Link>
                      </li>


                      <li className={
                        location.pathname == "/victim/profilesetting" ? "active" : ""
                      }>

                        <Link to="profilesetting">
                          <i className="fas fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname == "/victim/changePassword"
                            ? "active"
                            : ""
                        }>
                        <Link to="changePassword">
                          <i className="fas fa-lock"></i>
                          <span>Change Password</span>
                        </Link>
                      </li>

                      <li>
                        <a
                          onClick={logout}
                          className="hover:color-[#0DE2FE] hover:cursor-pointer"
                        >
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VictimLayout;
