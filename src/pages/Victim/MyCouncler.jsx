import React, { useState, useEffect } from "react";
import Talk from "talkjs";
import { decodeToken } from "react-jwt";
import axios from "axios";
import moment from "moment";

function MyCouncler() {
  const [councler, setCouncler] = useState([]);
  const [chatNot, setChatNot] = useState([]);
  const token = localStorage.getItem("token");
  const victim = decodeToken(token);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getCounclers();
    getvideochat();
  }, []);

  const chat = (coun) => {
    Talk.ready
      .then(() => {
        const currentUser = new Talk.User({
          id: victim._doc._id,
          name: victim.fullName,
          email: victim.email,
          //photoUrl: councler._doc.img,
          role: "default",
        });

        const otherUser = new Talk.User({
          id: coun._id,
          name: coun.User[0].fullName,
          email: coun.User[0].email,
          photoUrl: coun.img,
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

  const getCounclers = () => {
    axios("http://localhost:5000/api/councler")
      .then((res) =>
        setCouncler(res.data.filter((y) => y._id == victim._doc.counclerId)[0])
      )
      .catch((err) => console.log(err));
  };

  const getvideochat = () => {
    axios("http://localhost:5000/api/videochat")
      .then((res) => {
        let result = res.data
          .filter((y) => y.userId == victim._doc._id)
          .sort((a, b) => (a.createdDateTime > b.createdDateTime ? 1 : -1));
        setChatNot(result[result.length - 1]);
      })
      .catch((err) => console.log(err));
  };
  console.log(councler);

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
<br />
      <div>
        <div className="col-md-7 col-lg-8 col-xl-9 pb-5 text-black ">
          <div className="row row-grid ">
            <div className="col-lg-5 p-5">
              <div className="card widget-profile pat-widget-profile ">
                <div className="card-body ">
                  <div className="pro-widget-content  ">
                    <div className="profile-info-widget mt-4">
                      <a href="patient-profile.html" className="booking-doc-img">
                        <img
                          src={councler.img}
                          alt="User Image"
                        />
                      </a>

                      <div className="profile-det-info">
                        <h3>
                          <a href="#" className="font-bold text-lg">
                            {councler.User && councler.User[0].fullName}
                          </a>
                        </h3>
                        <div className="patient-details m-2">
                          <h5>
                            <b className="font-bold text-base">Councler ID :</b>{" "}
                            #{councler._id}
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt font-bold text-base"></i>{" "}
                            {councler.User && councler.Location[0].CCenterName}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="patient-info">
                    <ul>
                      <li>
                        Phone <span className="font-bold">{councler._id}</span>
                      </li>
                      {/* <li>
              Gender{" "}
              <span>
                {councler.gender == "F" ? "Female" : "Male"}
              </span>
            </li> */}
                      <li>
                        Email{" "}
                        <span>{councler.User && councler.User[0].email}</span>
                      </li>
                    </ul>
                    <hr className="p-[1px] border-none mt-5" />
                    <div className="flex justify-center mt-3 ">
                      {moment(new Date()).diff(
                       chatNot&& chatNot.createdDateTime,
                        "minutes"
                      ) <= 20 &&chatNot ? (
                        <a
                          href={chatNot&&chatNot.Link}
                          target="_blank"
                          onClick={() => {}}
                          className="btn btn-sm bg-primary-light mr-2"
                        >
                          <i className="fas fa-eye"></i> Video Chat
                        </a>
                      ) : (
                        <></>
                      )}

                      <button
                        onClick={() => {
                          chat(councler);
                          setShowModal(true);
                        }}
                        className="btn btn-sm bg-success-light mr-3"
                      >
                        <i className="fas fa-comments"></i> Chat
                      </button>

                      <button className="btn btn-sm bg-danger-light mr-3">
                        <i className="fas fa-times"></i> Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    </>
  );
}

export default MyCouncler;
