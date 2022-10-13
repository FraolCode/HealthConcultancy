import React, { useState, useEffect } from "react";
import { decodeToken } from 'react-jwt'
import axios from "axios";
import moment from "moment";
function CounclerHome() {
  const token = localStorage.getItem("token");
  const councler = decodeToken(token);


  const [users, setUsers] = useState([])
  const [regions, setRegions] = useState([])
  const [appointments, setAppointments] = useState([]);

  const [announces, setannounces] = useState([]);

 

  useEffect(() => {
    getRegions()
    getUsers()
    getAppointments()
    getannounces();
  }, [])

  const getRegions = () => {
    axios("http://localhost:5000/api/regions")
      .then((res) => setRegions(res.data))
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    axios("http://localhost:5000/api/victim")
      .then((res) => setUsers(res.data.filter(
        (y) =>
          y.counclerId == councler._doc._id &&
          y.transferdState &&
          y.isAccepted
      )))
      .catch((err) => console.log(err));
  };
  const getannounces = () => {

    axios("http://localhost:5000/api/announce")
      .then((res) => setannounces(res.data.filter(x => moment(x.expiredDateTime).diff(Date.now()) > 0)))
      .catch((err) => console.log(err));
  };
  const getAppointments = () => {
    axios("http://localhost:5000/api/appointment")
      .then((res) => {
        setAppointments(
          res.data.filter(
            y =>
              y.CounclerId === councler._doc._id
          )
        );
      })
      .catch((err) => console.log(err));


  };




  return (
    <>
    <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-white">
                Overview
              </h3>
            </div>
            
          </div>
        </div>




     <div className="relative bg-blueGray-100 md:pt-32 pb-32 pt-12 rounded ">
      
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 pb-4 mb-1 ">

                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                        Total Patient
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                        {users.length}
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div
                          className={
                            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                            "bg-blue-500"
                          }
                        >
                          <i className="feather-user-plus"></i>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 pb-4 mb-1 ">

                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                        Total Patient
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                        {users.length}
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div
                          className={
                            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                            "bg-blue-500"
                          }
                        >
                          <i className="feather-user-plus"></i>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 pb-4 mb-2 ">



             
                  
               







                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                        Total Regions
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                        {regions.length}
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div
                          className={
                            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                            "bg-red-500"
                          }
                        >
                          <i className="feather-users"></i>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
             
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 pb-4 mb-2">



             
                  
               







                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                        victim Request
                        
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                        1
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div
                          className={
                            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                            "bg-red-500"
                          }
                        >
                          <i className="feather-users"></i>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>



<br />
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded asdfgj pl-5 pr-5 text-white bg-blueGray-100  ">
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
            <thead>
              <tr>
                <th className=" px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Title
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                subject
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                createdBy
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                detail
                </th>
                
              </tr>
            </thead>
            <tbody>
            {announces.map((item, index) =>
              <tr>
                

                <td className="text-black border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {item.title}
                </td>
                <td className="text-black border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {item.subject}
                </td>
                <td className="text-black border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {item.createdBy}
                </td>
                <td className="text-black border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  
                <div className="row">
      


        <div className="card col-lg-10 ml-3  p-2">

          
            <p className="card-text text-black ">{item.detail}</p>
         
        </div>


    </div>
                 

                </td>
              </tr>
            )}


              
              
            </tbody>
          </table>
        </div>
      </div>
      <br />





     


    

    </>
  );
}

export default CounclerHome;
