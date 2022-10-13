import React, { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";
import Table from "../../components/Table";
import axios from "axios";
import {customToast} from '../../customToast'

function Region() {
  const [addRegion, setAddRegion] = useState(false);
  const [regionName, setRegionName] = useState("");
  const [regions, setRegions] = useState([]);
  const token = localStorage.getItem("token");
  const createdBy = decodeToken(token).email;

  useEffect(() => {
    getRegions();
  }, []);

  const getRegions = () => {
    axios("http://localhost:5000/api/regions")
      .then((res) => setRegions(res.data))
      .catch((err) => console.log(err));
  };

  console.log(regions);
  const column = [
    { heading: "Region Name", value: "regionName" },
    { heading: "Created By", value: "createdBy" },
  ];

  async function registerRegion(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/regions/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        regionName,
        createdBy,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status) {
      customToast("Successfuly Registerd",0);
      setRegionName("");
      getRegions();
      setAddRegion(!addRegion);
    } else {
      customToast(data.data,1);
    }
  }

  return (
    <div className="content container-fluid rounded-lg  bg-blueGray-100 text-white ">
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-3 text-md-end">
          <a
            onClick={() => setAddRegion(!addRegion)}
            className={
              !addRegion ? "btn btn-primary btn-announce mb-3" : "hidden"
            }
          >
            Add Region
          </a>
        </div>
      </div>

      <section className={addRegion ? "w-full col-xl-6 d-flex row  rounded-lg" : "hidden"}>
        <div className="container mx-auto px-4">
          
            <div className="w-full lg:w-11/12 ">
              <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg ">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                  Region Form
                  </h4>


                  <form onSubmit={registerRegion}>
                    
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Region Name
                      </label>
                      <input
                        type="text"
                        value={regionName}
                        onChange={(e) => setRegionName(e.target.value)}
                        className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                        required
                      />
                    </div>


                    <div className="text-center mt-6">
                      <button type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Add Region</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          
        </div>
      </section>
      

      
      



      <div className={!addRegion ? "row" : "hidden"}>
        <Table title="Regions" data={regions} column={column} />
      </div>
    </div>
  );
}

export default Region;
