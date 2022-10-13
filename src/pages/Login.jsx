import React, { useState } from "react";
import { Link } from "react-router-dom";
import { decodeToken } from "react-jwt";
import axios from "axios";
import logo from "../assets/img/logo.png";
import { customToast } from "../customToast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  async function loginUser(event) {
    console.log(email, password);
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const data = res.data;

        if (
          (data && data.us && decodeToken(data.us).role == "Victim") ||
          decodeToken(data.us).role == "Councler"
        ) {
          if (decodeToken(data.us).role === "Victim") {
            customToast("successfull", 0);
            localStorage.setItem("token", data.us);
            window.location.href = "/victim";
          } else {
            var checkStatus =
              decodeToken(data.us) && decodeToken(data.us)._doc.status;
            if (checkStatus) {
              customToast("successfull", 0);
              localStorage.setItem("token", data.us);
              window.location.href = "/councler";
            } else {
              customToast(
                "You have been disabled !!! Please Contact your Administrator.",
                1
              );
            }
          }
        } else {
          customToast("please check your login", 1);
        }
        console.log(data);
      })
      .catch((err) => customToast("please check your login", 1));
  }

  const sendResetEmail = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/users/changePassword`, {
        email: resetEmail,
      })
      .then((res) => {
        console.log(res);
        if (res.data.us) {
          customToast(
            "Successfully Sent recovery password, please check your email !!!",
            0
          );
          setShowModal(false);
        } else {
          customToast("No user Found!!", 1);
        }
      })
      .catch((e) => customToast(e, 1));
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center counclers-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex counclers-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h4 className="text-3xl font-semibold">Password Reset</h4>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-slate-400 opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-slate-400 opacity-4 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <h1 className="text-danger">X</h1>
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <h2 className="p-4">
                        Please Provide us with your email and we will send you a
                        reset instruction{" "}
                      </h2>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form className="was-validated" onSubmit={sendResetEmail}>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                            required
                          />
                        </div>
                        <div></div>
                        <div className="text-center mt-6 submit-section">
                          <button
                            className="btn btn-primary bg-[#09e5cf] w-100 w-100 btn-lg login-btn"
                            type="submit"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="main-wrapper">
        <div className="row">
          <div className="col-md-6 login-bg">
            <div className="login-banner"></div>
          </div>

          <div className="col-md-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="navbar-header">
                  <a id="mobile_btn" href="#">
                    <span className="bar-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </a>
                  <Link to="/adminlogin" className="navbar-brand ">
                    <img src={logo} className="w-50 img-fluid" alt="Logo" />
                  </Link>
                </div>

                <div className="w-full  ">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6"></div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form onSubmit={loginUser}>
                        <h3 text-sm font-bold>
                          Login{" "}
                        </h3>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Password"
                          />
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="btn btn-primary bg-[#09e5cf] w-100 w-100 btn-lg login-btn"
                            type="submit"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6 relative">
                    <div className="w-1/2">
                      <a
                        href="#ForgetPassword"
                        onClick={() => setShowModal(true)}
                        className="text-black-200"
                      >
                        <small>Forgot password?</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Login;
