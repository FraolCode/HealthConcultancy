import React, { useState, useEffect } from 'react'
import moment from 'moment';
import axios from 'axios';
import dateFormat from 'dateformat';

function Announcments() {

  const [announces, setannounces] = useState([]);



  useEffect(() => {

    getannounces();
  }, [])

  const getannounces = () => {

    axios("http://localhost:5000/api/announce")
      .then((res) => setannounces(res.data.filter(x => moment(x.expiredDateTime).diff(Date.now()) > 0)))
      .catch((err) => console.log(err));
  };

  const filterAnn = (e, value) => {
    e.preventDefault()
    axios("http://localhost:5000/api/announce")
      .then((res) => setannounces(res.data.filter(x => x.title.toLowerCase().includes(value) && moment(x.expiredDateTime).diff(Date.now()) > 0)))
      .catch((err) => console.log(err));



  }

  return (
    <>

      <div class="breadcrumb-bar mt-4">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-12 col-12">
              <h2 class="breadcrumb-title">Announcment List</h2>
            </div>
          </div>
        </div>
      </div>


      <div class="content pb-20 relative block bg-blueGray-700">
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



        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">


              {announces.map((item, index) =>

                <div class="blog">
                  <div class="blog-image">

                  </div>
                  <h3 class="blog-title"><a href="#">{item.title}</a></h3>
                  <div class="blog-info clearfix">
                    <div class="post-left">
                      <ul>
                        <li>
                          <div class="post-author">
                            <a href="doctor-profile.html"><img src="assets/user.png" alt="Post Author" /> <span>{item.createdBy}</span></a>
                          </div>
                        </li>
                        <li><i class="far fa-clock"></i>{dateFormat(item.expiredDateTime)}</li>
                        <li><i class="far fa-comments"></i>{item.subject}</li>

                      </ul>
                    </div>
                  </div>
                  <div class="blog-content">
                    <p>{item.detail}</p>

                  </div>
                </div>

              )}





            </div>

            <div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">

              <div className="card search-widget">
                <div className="card-body">
                  <form className="search-form" >
                    <div className="input-group">
                      <input type="text" placeholder="Search..." onChange={(e) => filterAnn(e, e.target.value.toLowerCase())} className="form-control" />
                      <div className="input-group-append">
                        {/* <button type="submit"  className="btn  btn-primary bg-[#09E5AB]"><i className="fa fa-search"></i></button> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>


              <div class="card post-widget">
                <div class="card-header">
                  <h4 class="card-title">Latest Posts</h4>
                </div>
                <div class="card-body">
                  <ul class="latest-posts">


                    {announces.map((item, index) =>
                      <li>
                        <div class="post-thumb">
                          <a href="blog-details.html">
                            <img class="img-fluid" src="assets/user.png" alt="" />
                          </a>
                        </div>
                        <div class="post-info">
                          <h4>
                            <a href="blog-details.html">{item.title}</a>
                          </h4>
                          <p>{dateFormat(item.expiredDateTime)}</p>
                        </div>
                      </li>
                    )}

                  </ul>
                </div>
              </div>







            </div>

          </div>
        </div>
      </div>



    </>
  )
}

export default Announcments