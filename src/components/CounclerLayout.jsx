import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { decodeToken } from "react-jwt";



function CounclerLayout() {



  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = decodeToken(token);
  console.log(user)
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/adminlogin";
  };
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>







      <div className="breadcrumb-bar -mt-5 shadow-xl shadow-xl ">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12 shadow-xl">
              
            </div>
          </div>
        </div>
      </div>




      <div className="row bg-blueGray-700">
        <nav className="md:left-0 md:block  md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
          <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            {/* Toggler */}
            <button
              className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              type="button"
              onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
            >
              <i className="fas fa-bars"></i>
            </button>


            <div className="widget-profile pro-widget-content">
              <div className="profile-info-widget">
                <a href="#" className="booking-doc-img">
                  <img src={user._doc.img} alt="User Image" />
                </a>
                <div className="profile-det-info">
                  <h3>{user.fullName}</h3>
                  <div className="patient-details">
                    <h5 className="mb-0"> {user.role} , {user.email} </h5>
                  </div>
                </div>
              </div>
            </div>
            {/* Collapse */}
            <div
              className={
                "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                collapseShow
              }
            >
              {/* Collapse header */}
              <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                <div className="flex flex-wrap">
                  <div className="w-6/12">
                  </div>
                  <div className="w-6/12 flex justify-end">
                    <button
                      type="button"
                      className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                      onClick={() => setCollapseShow("hidden")}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>






              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/councler/Dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/councler/Dashboard"
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (window.location.href.indexOf("/councler/Dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </Link>
                </li>

                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/councler/appointment") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/councler/appointment"
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (window.location.href.indexOf("/councler/appointment") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Appointment
                  </Link>
                </li>

                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/councler/victimrequest") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/councler/victimrequest"
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (window.location.href.indexOf("/councler/victimrequest") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    victimrequest
                  </Link>
                </li>

                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/councler/mypatient") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/councler/mypatient"
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (window.location.href.indexOf("/councler/mypatient") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    mypatient
                  </Link>
                </li>
              </ul>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Auth Layout Pages
              </h6>
              {/* Navigation */}

              <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">

                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/councler/profilesetting") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/councler/profilesetting"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Profile
                  </Link>
                </li>

                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/councler/changePassword") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/councler/changePassword"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Change Password
                  </Link>
                </li>
              </ul>

             
            </div>
          </div>
        </nav>
        <div className="col-md-9 bg-blueGray-700   shadow-md  ml-10 mt-[50px] p-3 pr-10">
         
          <Outlet />
        </div>
      </div>
      <div className="col-md-10 col-lg-18 col-xl-18">
          
        </div>



    </>
  );
}

export default CounclerLayout;
