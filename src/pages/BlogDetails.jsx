import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import dateFormat from 'dateformat';
import axios from 'axios';

function BlogDetails() {

  const location = useLocation();
  const [itemP, setItemP] = useState(location.state && location.state.item)


  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    axios("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  };


  const setItem = (e, item) => {
    e.preventDefault()

    setItemP(item)
  }

  return (<div className="mt-10">
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-12 col-12">
            
            <h2 class="breadcrumb-title"> Blog Details</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="content pb-20 relative block ">
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
            <div class="blog-view">
              <div class="blog blog-single-post">
                <div class="blog-image">
                  <a href="javascript:void(0);"><img alt="" src={itemP && itemP.img} class="img-fluid" /></a>
                </div>
                <h3 class="blog-title">{itemP && itemP.title}</h3>
                <div class="blog-info clearfix">
                  <div class="post-left">
                    <ul>
                      <li>
                        <div class="post-author">
                          <a href="doctor-profile.html"><img src={itemP && itemP.img} alt="Post Author" /> <span>{itemP && itemP.title}</span></a>
                        </div>
                      </li>
                      <li><i class="far fa-calendar"></i>{dateFormat(itemP.createdTime)}</li>

                    </ul>
                  </div>
                </div>
                <div class="blog-content">
                  <p>{itemP.Description}</p>
                </div>
              </div>

            </div>
          </div>

          <div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">

            <div class="card search-widget">
              <div class="card-body">

              </div>
            </div>


            <div class="card post-widget">
              <div class="card-header">
                <h4 class="card-title">Latest Posts</h4>
              </div>
              <div class="card-body">
                <ul class="latest-posts">



                  {blogs.slice(0, 4).map((item, index) => (
                    <li>
                      <div class="post-thumb">
                        <a onClick={(e) => { setItem(e, item) }}>
                          <img class="img-fluid" src={item.img} alt="" />
                        </a>
                      </div>
                      <div class="post-info">
                        <h4>
                          <a onClick={(e) => { setItem(e, item) }}>{item.title}</a>
                        </h4>
                        <p>{dateFormat(item.createdTime)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>




          </div>

        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogDetails