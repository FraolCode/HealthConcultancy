import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function CounclerProfile() {
  const location = useLocation();
  const [item, setItemP] = useState(location.state && location.state.item)



  return (
    <div className="mt-10">
      <div class="breadcrumb-bar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-12 col-12">
              <nav aria-label="breadcrumb" class="page-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Councler Profile
                  </li>
                </ol>
              </nav>
              <h2 class="breadcrumb-title">Councler Profile</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div class="doctor-widget">
                <div class="doc-info-left">
                  <div class="doctor-img">
                    <img
                      src={item.img}
                      class="img-fluid"
                      alt="User Image"
                    />
                  </div>
                  <div class="doc-info-cont">
                    <h4 class="doc-name">  {item.User[0].fullName}</h4>
                    <p class="doc-speciality">
                      {item.User[0].email} , {item.User[0].phoneNumber}
                    </p>
                    <p class="doc-department">
                      <img
                        src={item.img}
                        class="img-fluid"
                        alt="Speciality"
                      />
                      Councler
                    </p>


                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default CounclerProfile;
