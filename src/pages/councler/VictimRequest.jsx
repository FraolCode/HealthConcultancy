import React, { useState, useEffect } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { customToast } from '../../customToast'
import { createPopper } from "@popperjs/core";

function VictimRequest() {
  const [victims, setVictim] = useState([]);
  const token = localStorage.getItem("token");
  const councler = decodeToken(token);


  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };




  console.log("sfsdfsdf", councler);

  useEffect(() => {
    getVictims();
  }, []);
  const getVictims = () => {
    axios("http://localhost:5000/api/victim")
      .then((res) =>
        setVictim(
          res.data.filter(
            (y) => y.counclerId == councler._doc._id && !y.transferdState
          )
        )
      )
      .catch((err) => console.log(err));
  };

  const takeAction = (value, item) => {
    if (value) {
      item.transferdState = true;
      item.isAccepted = true;
    } else {
      item.transferdState = true;
      item.isAccepted = false;
    }

    axios
      .post(`http://localhost:5000/api/victim/updatev`, {
        item,
      })
      .then((res) => {
        getVictims();
        customToast("Registerd successfully", 0);

      })
      .catch((err) => console.log(err));
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
                Patient Request
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
                  Patient Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Phone Number
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  User Name
                </th>

                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Gender
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Remark
                </th>
                <th></th>


              </tr>
            </thead>
            <tbody>
              {victims.map((item, index) =>
                <tr key={item._id} >


                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    <i className="far fa-user"></i> {item.fullName.toUpperCase()}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                    <i className="fas fa-phone"></i>{" "}{item.phoneNumber}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-envelope"></i>{" "} {item.userName}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                    <i className="far fa-clock"></i> {item.email}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                    {item.gender == "F" ? "Female" : "Male"}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                    <i className="far fa-clock"></i> {item.remark}
                  </td>

                  <td className="text-end w-full">
                    <div className="table-action pr-6">
                      <button
                        onClick={() => takeAction(true, item)}
                        className="btn btn-sm bg-success-light mr-3"
                      >
                        <i className="fas fa-check"></i> Accept
                      </button>
                      <a
                        onClick={() => takeAction(false, item)}
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times"></i> Cancel
                      </a>
                    </div>
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

export default VictimRequest;
