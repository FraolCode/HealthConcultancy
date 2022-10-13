import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { customToast } from "../../customToast";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";

function CounclerSearch() {
  const locationn = useLocation();
  const [nameQ, setItemP] = useState(locationn.state && locationn.state.name);
  const [location, setLcoation] = useState(
    locationn.state && locationn.state.location
  );

  const navigation = useNavigate();

  const setMap = (map) => {
    if (map != null) {
      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize();
      });
      const container = document.getElementById("map-container");
      resizeObserver.observe(container);
    }
  };

  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const [loaction, setloaction] = useState([9.0130375, 38.7739399]);

  //modal
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [remark, setRemark] = useState("");
  const [counclerId, setCounclerId] = useState("");

  const Markers = () => {
    // const map = useMapEvents({
    //   click(e) {
    //     setloaction([e.latlng.lat, e.latlng.lng]);
    //   },
    // });

    return loaction ? (
      <Marker position={loaction}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    ) : //       <Marker
    //         key={loaction[0]}
    //         position={loaction}
    //         interactive={false}
    //       >

    // <Popup>
    //         A pretty CSS3 popup. <br /> Easily customizable.
    //       </Popup>

    //       </Marker>
    null;
  };

  const [userModal, setUserModal] = useState([]);
  const [users, setUsers] = useState([]);
  const [counclers, setCouncler] = useState([]);
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
      console.log(initialPosition);
    });
    getUsers();
    getCouncler();

    getRegion();
  });
  const getCouncler = () => {
    axios("http://localhost:5000/api/councler")
      .then((res) => {
        console.log(res.data);
        nameQ && location
          ? setCouncler(
              res.data.filter(
                (item) =>
                  item.status &&
                  item.location === location &&
                  item.User[0].fullName.includes(nameQ)
              )
            )
          : nameQ && !location
          ? setCouncler(
              res.data.filter(
                (item) => item.status && item.User[0].fullName.includes(nameQ)
              )
            )
          : !nameQ && location
          ? setCouncler(
              res.data.filter(
                (item) => item.status && item.location === location
              )
            )
          : setCouncler(res.data.filter((item) => item.status));
      })
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    axios("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const getRegion = () => {
    axios("http://localhost:5000/api/regions")
      .then((res) => {
        setRegions(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const [showModal, setShowModal] = useState(false);

  const registerVictim = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/victim/create", {
        fullName: fullName,
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        gender: gender,
        remark: remark,
        counclerId: userModal._id,
        location: userModal.Location[0]._id,
      })
      .then((res) => {
        customToast(
          "Successfuly Added please check your email for your approval",
          0
        );
        setShowModal(false);
        setFullName(null);
        setUserName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setGender("");
        setRemark("");
        // navigate("/admindashboard/announcment")
        console.log(res);
      });
  };

  // const passData =(e,item)=>{

  //     e.preventDefault();

  //     navigation(
  //       '/CounclerProfile',
  //    {   state:{
  //         item:item
  //       }}

  //     );

  // }

  return (
    <>
      {showModal ? (
        <>
          <div className=" p-10 justify-center items-center flex overflow-x-hidden  fixed inset-0 z-50  outline-none focus:outline-none">
            <div className="content container-fluid rounded-lg  bg-blueGray-100 text-white ">
              <section className="w-full col-xl-6 d-flex row  rounded-lg">
                <div className="container mx-auto px-4">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="w-full lg:w-11/12 ">
                    <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg ">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">
                          Please submit the following form
                        </h4>

                        <form
                          className="was-validated"
                          onSubmit={registerVictim}
                        >
                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Councler
                            </label>
                            <input
                              type="text"
                              value={userModal.User[0].fullName}
                              disabled
                              className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Full Name"
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              FullName
                            </label>
                            <input
                              type="text"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Full Name"
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              User Name
                            </label>
                            <input
                              type="text"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="User Name"
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Phone Number"
                              required
                            />
                          </div>

                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Email"
                              required
                            />
                          </div>

                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Password
                            </label>
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="********"
                              required
                            />
                          </div>

                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Gender
                            </label>

                            <select
                              class="form-control border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 select"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                              required
                            >
                              <option value="M">Male</option>
                              <option value="F">Female</option>
                            </select>
                          </div>
                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Remark
                            </label>

                            <textarea
                              rows="5"
                              cols="5"
                              onChange={(e) => setRemark(e.target.value)}
                              className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Enter text here"
                              required
                            >
                              {remark}
                            </textarea>
                          </div>

                          <div className="text-center mt-6">
                            <button
                              type="submit"
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            >
                              Send Request
                            </button>
                            <button
                              onClick={() => setShowModal(false)}
                              type="submit"
                              className="bg-blueGray-500 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div class="breadcrumb-bar mt-4">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-12 col-12">
              <h2 class="breadcrumb-title">Counseller List</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content pb-20 relative block container-fluid bg-blueGray-700 ">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-12 ">
            <div className="row align-items-center mb-4">
              <h1 className="text-xl text-center text-white mb-1 font-semibold">
                {counclers.length} Counsellor found
              </h1>
              <div className="col-md-6 col"></div>
            </div>
            <div className="row">
              {counclers.map((item, index) => (
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <br />

                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                          <div className="relative">
                            <img
                              alt="..."
                              src={item.img}
                              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                            />
                          </div>
                        </div>
                        <div className="w-full px-4 text-center mt-20"></div>
                      </div>
                      <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                          {item.User[0].fullName}
                        </h3>
                        <div className="pro-content">
                          <div className="row row-sm"></div>
                        </div>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                          <i className="fa fa-address-card mr-2 text-lg text-blueGray-400"></i>{" "}
                          {item.User[0].email} , <br />{" "}
                          {item.User[0].phoneNumber}
                        </div>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {item.Location[0].CCenterName} /&nbsp;
                          {regions.filter(
                            (i) => i._id === item.Location[0].regionId
                          )[0] &&
                            regions.filter(
                              (i) => i._id === item.Location[0].regionId
                            )[0].regionName}
                        </div>
                      </div>
                      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                          <div className="col-6">
                            <a
                              onClick={() => {
                                setShowModal(true);
                                setUserModal(item);
                              }}
                              className="btn book-btn bg-[#0de0fe]  text-white hover:bg-white hover:text-[#0de0fe]  font-bold text-[20] border-solid border-[#0de0fe]"
                            >
                              Send Request
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-6 col-lg-12 ">
            <MapContainer
              center={loaction || initialPosition}
              zoom={14}
              style={{ height: "80vh", width: "100%", zIndex: "" }}
              id="map-container"
              ref={setMap}
            >
              {/* <Markers /> */}
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={initialPosition}>
                <Popup>
                  Current Location. <br /> Easily customizable.
                </Popup>
              </Marker>
              {counclers.map((item) => (
                <Marker position={item.Location[0].loaction}>
                  <Popup>
                    <div className="max-h-[600px]  rounded-sm max-w-[550px] overflow-hidden">
                      <div className="profile-widget ">
                        <div className="doc-img">
                          <a href="profile.html" tabindex="0" target="_blank">
                            <img
                              className="img-fluid h-[150px] w-[200px]"
                              alt="Dr. Deborah Angel"
                              src={item.img}
                            />
                          </a>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <a href="profile.html" tabindex="0">
                              Councler. {item.User[0].fullName}
                            </a>
                            <i className="fas fa-check-circle verified"></i>
                          </h3>
                          <p className="speciality">Simple Decription</p>
                          <ul className="available-info">
                            <li>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {item.Location[0].CCenterName} /&nbsp;
                              {regions.filter(
                                (i) => i._id === item.Location[0].regionId
                              )[0] &&
                                regions.filter(
                                  (i) => i._id === item.Location[0].regionId
                                )[0].regionName}
                            </li>
                            <li>
                              <i className="fas fa-paper-plane"></i> Email,{" "}
                              {item.User[0].email}
                            </li>
                            <li>
                              <i className="fas fa-phone"></i>Phone Number,{" "}
                              {item.User[0].phoneNumber}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounclerSearch;
