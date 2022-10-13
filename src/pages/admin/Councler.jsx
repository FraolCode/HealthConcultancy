import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import axios from "axios";
import {customToast} from '../../customToast'
export const Councler = () => {
  const [counclers, setCouncler] = useState([]);
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    getCouncler();
    getRegion();
  }, []);

  const getCouncler = () => {
    axios("http://localhost:5000/api/councler")
      .then((res) => {
        console.log(res.data)
        setCouncler(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getRegion = () => {
    axios("http://localhost:5000/api/regions")
      .then((res) => {
        setRegions(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };

  const updateData = (e, id, item) => {
    e.preventDefault();
    item.status = !item.status
    console.log("item",item)
    axios.put(`http://localhost:5000/api/councler/update/${id}`, {
      item
    })
      .then((res) => {

        customToast("Successfuly updated",0);

        refreshPage()
      })
      .catch((err) => console.log(err));
  }
  function refreshPage() {
    window.location.reload(false);
  }

  return (

    <>

<div className="content container-fluid rounded-lg  bg-blueGray-100 text-white ">
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-3 text-md-end">
          <Link
            to="/admindashboard/councler/addcouncler"
            className="btn btn-primary btn-announce mb-3"
          >
            Add Counsellor
          </Link>
        </div>
      </div>

      





      <div className="row ">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header border-bottom-0">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title font-bold text-lg">Counsellor</h5>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-borderless hover-table items-center w-full bg-transparent border-collapse">
                  <thead className="thead-light">
                    <tr>
                      <th >Image</th>
                      <th>User</th>
                      <th>location</th>
                      <th>Member since</th>
                      <th>Status</th>
                      <th className="text-right">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {counclers.map((item, index) => (
                      <tr key={item._id}>
                        <td><a href="#">
                              <img
                                className=" avatar rounded avatar-img"
                                src={item.img}
                                alt="User Image"
                              />
                            </a></td>
                        <td>
                          <h2 className="table-avatar">
                            
                            <a href="#" className="user-name">
                              {item.User[0].fullName}
                              <span className="text-muted">
                                {item.User[0].email}, {item.User[0].phoneNumber}
                              </span>
                            </a>
                          </h2>
                        </td>
                        <td>
                          <span className="disease-name">
                            {item.Location[0].CCenterName} /
                            {item.Location && regions.filter(i => i._id == item.Location[0].regionId)[0] &&regions.filter(i => i._id == item.Location[0].regionId)[0].regionName}
                          </span>
                        </td>
                        <td>
                          <span className="text-yellow user-name">
                            New Councler
                          </span>
                          <span className="d-block">
                            {dateFormat(item.createdTime)}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              item.status
                                ? "badge bg-badge-grey text-success"
                                : "badge bg-badge-grey text-danger"
                            }
                          >
                            <i className="fas fa-circle me-1"></i> {item.status? 'Enabled':'Disabled'}
                          </span>
                        </td>
                        <td className="text-right">
                          <i >



                            <button type="button" onClick={(e) => updateData(e, item._id, item)} className="text-white bg-gradient-to-r from-green-600  to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Enable / Disable</button>


                          </i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>



    
  );
};
