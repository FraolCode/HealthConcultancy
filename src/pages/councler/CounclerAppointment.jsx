import React, { useState, useEffect } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import dateFormat from "dateformat";

function CounclerAppointment() {
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem("token");
  const councler = decodeToken(token);

  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = () => {
    axios("http://localhost:5000/api/appointment")
      .then((res) => {
        setAppointments(
          res.data.filter((y) => y.CounclerId == councler._doc._id)
            .sort((a, b) => (a.AppointmentDate > b.AppointmentDate ? 1 : -1))
            .sort((a, b) => (a.AppointmentTime > b.AppointmentTime ? 1 : -1))
        );
      })
      .catch((err) => console.log(err));

    console.log(appointments);
    //.filter(y=>y.CounclerId==councler._doc._id
  };

  return (




    <>
      <br />
      <br />
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-100 text-black   ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-black">
                Announcement
              </h3>
            </div>

          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead >
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Victim Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Victim Email
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Victim Phone number
                </th>

                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Date
                </th>

              </tr>
            </thead>
            <tbody>
              {appointments.map((item, index) =>
                <tr key={item._id} >


                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    <i className="far fa-user"></i> {item.Victim && item.Victim[0].fullName.toUpperCase()}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-envelope"></i>{" "} {item.Victim && item.Victim[0].email}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-phone"></i>{" "} {item.Victim && item.Victim[0].phoneNumber}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                    <i className="far fa-clock"></i> {dateFormat(item.AppointmentDate)}  {item.AppointmentTime}
                  </td>
                </tr>
              )}




            </tbody>
          </table>
        </div>
      </div>




















    </>













  );
}

export default CounclerAppointment;
