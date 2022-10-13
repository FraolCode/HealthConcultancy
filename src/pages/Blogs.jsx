import React, { useEffect, useState } from 'react'
import axios from 'axios';
import dateFormat from 'dateformat';
import { useNavigate } from 'react-router-dom';

function Blogs() {

    const navigation = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        getBlogs();

    }, []);
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


    const filterBlog = (e, value) => {

        e.preventDefault()

        axios("http://localhost:5000/api/blogs")
            .then((res) => setBlogs(res.data.filter(x => x.title.toLowerCase().includes(value))))
            .catch((err) => console.log(err));

    }

    return (
        <>

            <div className="breadcrumb-bar mt-4">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">

                            <h2 className="breadcrumb-title">Blogs List</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="content pb-20 relative block bg-blueGray-700">
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
                <br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row blog-grid-row">

                                {blogs.map((item) =>
                                  

                                        <div className="blog grid-blog">
                                            <div className="blog-image  ">
                                                <a onClick={(e) => passData(e, item)}> <img height="3" className="img-fluid" src={item.img} alt="Post Image" /></a>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <a onClick={(e) => passData(e, item)}><img width="20" src={item.img} alt="Post Author" /> <span>{item.createdBy}</span></a>
                                                        </div>
                                                    </li>
                                                    <li><i className="far fa-clock"></i>  {dateFormat(item.createdTime)} </li>
                                                </ul>
                                                <h3 className="blog-title"><a href="blog-details.html">{item.title}</a></h3>
                                                <p className="mb-0">{item.detail}</p>
                                            </div>
                                        </div>

                                    

                                )}
                            </div>

                            {/* <div className="row">
                                <div className="col-md-12">
                                    <div className="blog-pagination">
                                        <nav>
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1"><i className="fas fa-angle-double-left"></i></a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">1</a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div> */}


                        </div>

                        <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">

                            <div className="card search-widget">
                                <div className="card-body">
                                    <form className="search-form" >
                                        <div className="input-group">
                                            <input type="text" placeholder="Search..." onChange={(e) => filterBlog(e, e.target.value.toLowerCase())} className="form-control" />
                                            <div className="input-group-append">
                                                {/* <button type="submit"  className="btn  btn-primary bg-[#09E5AB]"><i className="fa fa-search"></i></button> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            <div className="card post-widget">
                                <div className="card-header">
                                    <h4 className="card-title">Latest Posts</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="latest-posts">

                                        {blogs.slice(0, 4).map((item, index) => (
                                            <li>
                                                <div className="post-thumb">
                                                    <a onClick={(e) => passData(e, item)}>
                                                        <img className="img-fluid" src={item.img} alt="" />
                                                    </a>
                                                </div>
                                                <div className="post-info">
                                                    <h4>
                                                        <a onClick={(e) => passData(e, item)}> {item.title}</a>
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

        </>
    )
}

export default Blogs