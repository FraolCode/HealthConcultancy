import React, { useState, useEffect, PureComponent } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [];




axios("http://localhost:5000/api/ccenters/get")
  .then((res) => {
    res.data.map((item) => {
      data.push(item);
    });

    console.log("data", data);
  })

  .catch((err) => console.log(err));

function AdminHome() {
  const [users, setUsers] = useState([]);
  const [regions, setRegions] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getRegions();
    getUsers();
    getAppointments();
  }, []);

  const getRegions = () => {
    axios("http://localhost:5000/api/regions")
      .then((res) => setRegions(res.data))
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    axios("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const getAppointments = () => {
    axios("http://localhost:5000/api/appointment")
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>


      <div className="relative  rounded-lg  bg-blueGray-100 text-white text-white md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">

                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          COUNSELLOR
                        </h5><br />
                        <span className="font-semibold text-xl text-blueGray-700">
                          {users.filter((u) => u.role == "Councler").length}
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
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">



             
                  
               







                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Victim
                        </h5><br />
                        <span className="font-semibold text-xl text-blueGray-700">
                        {users.filter((u) => u.role == "Victim").length}
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
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">

   
        







                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                        Appointments
                        </h5><br />
                        <span className="font-semibold text-xl text-blueGray-700">
                        {appointments.length}
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div
                          className={
                            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                            "bg-green-500"
                          }
                        >
                          <i className="feather-calendar"></i>
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
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">


                    
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                        Regions
                        </h5><br />
                        <span className="font-semibold text-xl text-blueGray-700">
                        {regions.length}
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div
                          className={
                            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                            "bg-blue-500"
                          }
                        >
                          <i className="feather-map-pin"></i>
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


      {data.length > 0 && (
        <ResponsiveContainer bac width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Councler" stackId="a" fill="#8884d8" />
            <Bar dataKey="Victim" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

export default AdminHome;
