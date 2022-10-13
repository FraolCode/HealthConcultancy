import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {customToast} from '../../customToast'

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    axios("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  };


  const deleteData =(e,id)=>{
    e.preventDefault();
  
    axios
    .delete(`http://localhost:5000/api/blogs/delete/${id}`)
    .then((res) => {
      customToast("Successfully deleted",0);
      refreshPage();
    });
  
  
  }
  function refreshPage() {
    window.location.reload(false);
  }
  console.log(blogs);

  return (
    <div className="content container-fluid  bg-blueGray-700 text-white ">
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-3 text-md-end">
          <Link
            to="/admindashboard/blog/addblog"
            className="btn btn-primary btn-blog mb-3"
          >
            Add Blog
          </Link>
        </div>
      </div>
      <div className="row">
        {blogs.map((item, index) => (
           <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
           <div className="blog grid-blog flex-fill">
             <div className="blog-image">
               <a href="blog-details.html">
                 <img className="img-fluid" src={item.img} alt="Post Image" />
               </a>
               <div className="fav-btn">
                 <img src="../assets_admin/img/icon/eye-icon.png" alt="icon" />{" "}
               </div>
             </div>
             <div className="blog-content">
               <ul className="entry-meta meta-item">
                 <li>
                   <div className="post-author">
                     <a href="profile.html">
                       <img src={item.img} alt="Post Author" />
                       <span>
                         <span className="post-title">{item.createdBy}</span>
                         <span className="post-date">
                           <i className="far fa-clock"></i>
                           {item.createdTime}
                         </span>
                       </span>
                     </a>
                   </div>
                 </li>
               </ul>
               <h3 className="blog-title">
                 <a href="blog-details.html">{item.title}</a>
               </h3>
               <p>{item.Description}</p>
             </div>
             <div className="row">
               <div className="col">
                 {/* <a href="edit-blog.html" className="text-success">
                   <i className="feather-edit-3 me-1"></i> Edit
                 </a> */}
               </div>
               <div className="col text-end">
                 <a onClick={(e)=>deleteData(e,item._id)} className="text-danger cursor-pointer">
                   <i className="feather-eye-off me-1"></i> Delete
                 </a>
               </div>
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
}


export default Blog;
