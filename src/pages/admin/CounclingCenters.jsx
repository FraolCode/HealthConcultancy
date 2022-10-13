import React, { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";
import Table from "../../components/Table";
import axios from "axios";
import {customToast} from '../../customToast'

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";






function CounclingCenters() {


  


  const setMap = ( map ) => {
    if(map!=null){
    const resizeObserver = new ResizeObserver( () => {
      
          map.invalidateSize()
    } )
    const container = document.getElementById('map-container')
    resizeObserver.observe(container)
  }
}


  const [initialPosition, setInitialPosition] = useState([
    9.0130375, 38.7739399,
  ]);
  const [loaction, setloaction] = useState([
    9.0130375, 38.7739399,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
      console.log(initialPosition);
    });
    getccenters();
    getRegions();
    generateList();
  }, []);

  const Markers = () => {
    const map = useMapEvents({
      click(e) {
        setloaction([e.latlng.lat, e.latlng.lng]);
      },
    });

    return loaction ? (
      <Marker
        key={loaction[0]}
        position={loaction}
        interactive={false}
      />
    ) : null;
  };

  const [addccenter, setAddccenter] = useState(false);

  const [CCenterName, setccenterName] = useState("");
  const [regionId, setRegionId] = useState("");

  const [regions, setRegions] = useState([]);

  const [ccenters, setccenters] = useState([]);
  const token = localStorage.getItem("token");
  const createdBy = decodeToken(token).email;

  const [ccenterss, setccenterss] = useState([]);

  const generateList = () => {
    var array = [];
    ccenters.map((item) => {
      var arr = {
        CCenterName: item.CCenterName,
        regionId: regions.find(item.regionId).regionName,
        createdBy: item.createdBy,
      };
      array.push(arr);
    });
    setccenterss(array);
  };
  const getccenters = () => {
    axios("http://localhost:5000/api/ccenters")
      .then((res) =>{ 
        var results=[]
        res.data.map((item)=>results.push({...item,...item.Region[0]}))

        console.log(results)
        setccenters(results)})
      .catch((err) => console.log(err));
  };

  const getRegions = () => {
    axios("http://localhost:5000/api/regions")
      .then((res) => {
        setRegions(res.data);
       
      })
      .catch((err) => console.log(err));
  };

  const column = [
    { heading: "Councling Center Name", value: "CCenterName" },
    { heading: "Region Name", value: "regionName" },
    { heading: "Created By", value: "createdBy" },
  ];

  async function registerccenter(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/ccenters/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CCenterName,
        regionId,
        createdBy,
        loaction
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status) {
      customToast('Successfully Created',0);
      setccenterName("");
      getccenters();
      setAddccenter(!addccenter);
    } else {
      customToast(data.data,1);
    }
  }

  return (
    <>



      <div className="content container-fluid rounded-lg  bg-blueGray-100 text-white">
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3 text-md-end">
            <a
              onClick={() => setAddccenter(!addccenter)}
              className={
                !addccenter ? "btn btn-primary btn-announce mb-3" : "hidden"
              }
            >
              Add Councling Center
            </a>
          </div>
        </div>

        <div className={addccenter ? "col-xl-12 d-flex" : "hidden"}>
          <div className="card flex-fill">
            <div className="card-header">
              <h4 className="card-title font-bold text-lg">
                Councling Center Form
              </h4>
            </div>

            <div className="card-body">
              <form onSubmit={registerccenter}>
                <div className="row">
                <div className="relative form-group col-6  mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 px-1  text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Center Name
                      </label>
                      <input
                        type="text"
                        value={CCenterName}
                        onChange={(e) => setccenterName(e.target.value)}
                        className=" form-control border-0 col-lg-3 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                        placeholder="Center Name"
                        required
                      />
                    </div>
                  
                  <div className="relative form-group col-6  mb-3 mt-8">
                    <label
                        className="block uppercase text-blueGray-600 px-1  text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Region Name
                      </label>
                    
                    <div className="col-lg-9">
                      <select
                        type="text"
                        value={regionId}
                        onChange={(e) => setRegionId(e.target.value)}
                        className="form-control border-0 col-lg-3 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                      >
                        <option>-- Select Region ---</option>
                        {regions.map((item) => (
                          <option key={item._id} value={item._id}>
                            {" "}
                            {item.regionName}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div
                    className="form-group col-12 mb-4 px-10"
                   
                  >
                    <MapContainer
                      center={loaction || initialPosition}
                      zoom={14}
                      style={{height:'55vh',width:'100%'}}
                      id='map-container'
                      ref={setMap}
                    >
                      <Markers />
                      <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                    </MapContainer>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Submit
                  </button>{" "}
                  | &nbsp;
                  <button
                    type="button"
                    onClick={() => setAddccenter(!addccenter)}
                    className="bg-blueGray-500 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={!addccenter ? "" : "hidden"}>
          <Table title="Councling Centers" data={ccenters} column={column} />
        </div>
      </div>
      <div className={!addccenter ? "" : "hidden"}></div>
    </>
  );
}

export default CounclingCenters;
