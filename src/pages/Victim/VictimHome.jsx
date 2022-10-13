import React, { useState, useEffect } from 'react'
import moment from 'moment';
import axios from 'axios';
import dateFormat from "dateformat";
import { useNavigate, Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';


function VictimHome() {
  const [blogs, setBlogs] = useState([]);

  const [announces, setannounces] = useState([]);
  const navigation = useNavigate();


  useEffect(() => {
    getBlogs();
  

    getannounces();
  }, [])


  const getBlogs = () => {
    axios("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  };

  
  const passData = (e, item) => {
    e.preventDefault();

    navigation(
      '/BlogDeetails',
      {
        state: {
          item: item
        }
      }

    );

  }
  const getannounces = () => {

    axios("http://localhost:5000/api/announce")
      .then((res) => setannounces(res.data.filter(x => moment(x.expiredDateTime).diff(Date.now()) > 0)))
      .catch((err) => console.log(err));
  };


  return (
<>
<br />
<section className="section section-blogs bg-blueGray-100 text-black rounded" >

        <div className="container-fluid">
          <div className="  section-header text-center aos">
            <h2 className='text-black' >Blogs and News</h2>
            <p className=" text-black sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row blog-grid-row aos">
            {blogs.slice(0, 4).map((item, index) => (
              <div className="col-md-6 col-lg-3 col-sm-12">
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <a onClick={(e) => passData(e, item)}>
                      <img
                        className="img-fluid"
                        src={item.img}
                        alt="Post Image"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <a onClick={(e) => passData(e, item)}>
                            <img src={item.img} alt="Post Author" />{" "}
                            <span>{item.createdBy}</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="far fa-clock"></i>
                        {dateFormat(item.createdTime)}
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <a onClick={(e) => passData(e, item)}>{item.title}</a>
                    </h3>
                    <p className="mb-0">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}


          </div>
          <div className="view-all text-center aos">
            <Link to="/blogs" className="btn btn-primary">
              View All
            </Link>
          </div>
        </div>
      </section>


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
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
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
                

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {item.title}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {item.subject}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {item.createdBy}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  
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
   

  )
}

export default VictimHome