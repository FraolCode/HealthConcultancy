import React, { useState, useEffect } from "react";

import axios from "axios";
import { decodeToken } from "react-jwt";
import { JitsiMeeting } from "@jitsi/react-sdk";
import Talk from "talkjs";
import {customToast} from '../../customToast'
function MyPatient() {
  const [victims, setVictim] = useState([]);

  const token = localStorage.getItem("token");
  const councler = decodeToken(token); 
  const [videoCall, setVideoCall] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  const [chatLink, setChatLink] = useState("");

  const [victimId, setVictimId] = useState("");

  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const [patient, setPatient] = useState([]);

  const sendLink = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/videochat/create", {
        userId: patient._id,
        Link: chatLink,
        createdDateTime: new Date(),
      })
      .then((res) => customToast("Successfully Sent",0))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVictims();
  }, []);

  const chat = (chatVictim) => {
    Talk.ready
      .then(() => {
        const currentUser = new Talk.User({
          id: councler._doc._id,
          name: councler.fullName,
          email: councler.email,
          photoUrl: councler._doc.img,
          welcomeMessage: "Hello I am your counseler feel free to talk !",
          role: "default",
        });

        const otherUser = new Talk.User({
          id: chatVictim._id,
          name: chatVictim.fullName,
          email: chatVictim.email,
          photoUrl: null,
          role: "default",
        });

        const session = new Talk.Session({
          appId: "txCHGCC2",
          me: currentUser,
        });

        const conversationId = Talk.oneOnOneId(currentUser, otherUser);

        const conversation = session.getOrCreateConversation(conversationId);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);

        const inbox = session.createInbox();
        inbox.select(conversation);
        inbox.mount(document.getElementById("inbox-container"));

        // chatboxEl = window.talkSession.createInbox({
        //   selected: conversation,
        // });
        // chatboxEl.mount(this.container);
      })
      .catch((e) => console.error(e));
  };

  const getVictims = () => {
    axios("http://localhost:5000/api/victim")
      .then((res) =>
        setVictim(
          res.data.filter(
            (y) =>
              y.counclerId == councler._doc._id &&
              y.transferdState &&
              y.isAccepted
          )
        )
      )
      .catch((err) => console.log(err));
  };

  const registerAppointment = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/appointment/create", {
        AppointmentTime:appointmentTime ,
        AppointmentDate: appointmentDate,
        VictimId: victimId._id,
        CounclerId: councler._doc._id,
        createdDateTime: new Date(),
      })
      .then((res) => {
        setShowAppModal(false);
        customToast("Successfully Appointed",0)})
      .catch((err) => console.log(err));
  };

  const appointment = (item) => {
    setVictimId(item);
    setVideoCall(false);
    setShowModal(false);
    setShowAppModal(true);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h4 className="text-3xl font-semibold">Chat</h4>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-slate-400 opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-slate-400 opacity-4 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div
                    style={{ height: "500px", width: "700px" }}
                    id="inbox-container"
                  >
                    <span>Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
      {showAppModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h4 className="text-xl font-semibold">
                    Appointment for{" "}
                    <span className="text-3xl font-semibold">
                      {victimId.fullName.toUpperCase()}
                    </span>
                  </h4>
                  <button
                    className="p-1  bg-transparent border-0 text-slate-400 opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-4 -mt-10 -mr-9"
                    onClick={() => setShowAppModal(false)}
                  >
                    <span className="bg-transparent text-slate-400 opacity-4 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div>
                    <form
                      className="was-validated"
                      onSubmit={registerAppointment}
                    >
                      <div className="form-group row">
                        <label className="col-lg-3 font-bold col-form-label">
                          Date
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="date"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 font-bold col-form-label">
                          Time
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="time"
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Appoint
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <>
        <div className="relative  text-black pl-10 pb-32 pt-12  " >
          {!videoCall ? (
            <div className="col-md-7 col-lg-8 col-xl-9 ">
              <div className="row row-grid">
                {victims.map((item) => (
                  <div key={item._id} className="col-lg-5 shadow-xl ">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget mt-4">
                            <a
                              href="patient-profile.html"
                              class="booking-doc-img"
                            >
                              <img src="/assets/user.png" alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>
                                <a className="font-bold text-lg">
                                  {item.fullName.toUpperCase()}
                                </a>
                              </h3>
                              <div className="patient-details m-2">
                                <h5>
                                  <b className="font-bold text-base">
                                    Patient ID :
                                  </b>{" "}
                                  #{item._id}
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt font-bold text-base"></i>{" "}
                                  {item.remark}a
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="patient-info">
                          <ul className="text-black">
                            <li className="">
                              Phone{" "}
                              <span className="font-black text-base">
                                {item.phoneNumber}
                              </span>
                            </li>
                            <li>
                              Gender{" "}
                              <span className="font-black text-base">
                                {item.gender == "F" ? "Female" : "Male"}
                              </span>
                            </li>
                            <li>
                              Email{" "}
                              <span className="font-black text-base">
                                {item.email}
                              </span>
                            </li>
                          </ul>
                          <hr className="p-[1px] border-none mt-5" />
                          <div className="flex justify-center mt-3 ">
                            <a
                              onClick={() => {
                                setVideoCall(true);
                                setPatient(item);
                              }}
                              className="btn btn-sm bg-primary-light mr-2"
                            >
                              <i className="fas fa-eye"></i> Video Chat
                            </a>

                            <button
                              onClick={() => {
                                chat(item);
                                setVideoCall(false);

                                setShowModal(true);
                              }}
                              className="btn btn-sm bg-success-light mr-2"
                            >
                              <i className="fas fa-comments"></i> Chat
                            </button>

                            <button
                              onClick={() => {
                                appointment(item);
                              }}
                              className="btn btn-sm bg-warning-light "
                            >
                              <i className="fas fa-calendar-check"></i>{" "}
                              &nbsp;Appointment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
               

              <div className="search-box aos flex justify-start mb-2">
                <button
                  type="button"
                  onClick={() => setVideoCall(false)}
                  className="fc-prev-button fc-button fc-state-default fc-corner-left "
                  aria-label="prev"
                >
                  <span className="fc-icon fc-icon-left-single-arrow h-10 w-10 text-xl"></span>
                </button>

                <form onSubmit={sendLink}>
                  <div className="form-group search-info">
                    <input
                      type="text"
                      value={chatLink}
                      onChange={(e) => setChatLink(e.target.value)}
                      className="form-control"
                      placeholder="Paste meeting Link"
                    />
                    <span className="form-text">
                      Ex : https://meet.jit.si/Health%20Consultancy
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary h-12 mt-0 bg-[#4687ED] "
                  >
                    <span>Send</span>
                  </button>
                </form>

                <span className=" ml-4 text-lg items-center text-white font-semibold ">
                 <span className="fc-button">
                  Patient Name :{" "}
                  <span className="font-bold">
                    {patient.fullName.toUpperCase()}
                  </span>{" "}
                  </span> 
                  
                  <br />
                  <br />
                  <button
                              onClick={() => {
                                // appointment(item);
                              }}
                              className="btn w-full btn-sm bg-warning-light "
                            >
                              <i className="fas fa-calendar-check"></i>{" "}
                              &nbsp;Appointment
                            </button>
                </span>
                <br />
               
                
              </div>

              <div className="px-5 pb-5">
                <JitsiMeeting
                  configOverwrite={{
                    startWithAudioMuted: true,
                    hiddenPremeetingButtons: ["microphone"],
                  }}
                  roomName={"Health Consultancy"}
                  getIFrameRef={(node) => (node.style.height = "60vh")}
                />
              </div>
            </div>
          )}
        </div>
      </>
    </>
  );
}

export default MyPatient;
