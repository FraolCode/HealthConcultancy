import React, { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import { useNavigate, Link } from 'react-router-dom'
import { customToast } from '../customToast'
import { Button, Container, Row, Col } from "reactstrap";
import { FaFacebook,FaInstagram,FaLinkedin, FaTwitter ,FaEye, FaThumbtack,FaHandHoldingHeart } from 'react-icons/fa';




function Home() {
  const [blogs, setBlogs] = useState([]);
  const [location, setLocation] = useState([])

  const [locationSelected, setLocationSelected] = useState('')
  const [name, setName] = useState('')
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [comments, setcommnets] = useState("");
  const [subject, setSubject] = useState("");






  useEffect(() => {
    getBlogs();
    getLocation();
  }, []);
  const getBlogs = () => {
    axios("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  };

  const getLocation = () => {
    axios.get("http://localhost:5000/api/ccenters")
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }


  const passData = (e, item) => {
    e.preventDefault();

    navigation(
      'BlogDeetails',
      {
        state: {
          item: item
        }
      }

    );

  }





  const filter = (e) => {
    e.preventDefault()
    navigation(
      'counclersearch',
      {
        state: {
          name: name,
          location: locationSelected
        }
      }
    )
  }

  function registerMessage(event) {
    event.preventDefault();
    const url = "http://localhost:5000/api/messages/create"
    axios.post(url, {
      name: name,
      email: email,
      comments: comments,
      subject: subject,
    })
      .then(function (response) {
        customToast("Successfuly sent", 0);
        setName("");
        setEmail("");
        setcommnets("");
        setSubject(""); console.log(response);
      })
      .catch(function (error) {
        customToast(error, 1);
      });
  }



  return (
    <div>

      <section className="  section section-search relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 ">
        <div className="container-fluid">
          <div className="banner-wrapper">
            <div className="banner-header text-center aos">

              <h1 className="text-white" >Putting a Stop to Sexual Violence and Harmful Cultural Practices</h1>
              <p className="text-white" >
              Don't be ashamed of your story, It will inspire others
              </p>







            </div>

            <div className="search-box aos">
              <form >
                <div className="form-group search-location">
                  <select
                    type="text"
                    className="form-control"
                    placeholder="one-stop Location"
                    value={locationSelected}
                    onChange={(e) => setLocationSelected(e.target.value)}
                  >
                    <option>one-stop Location</option>
                    {location.map((item) => <option value={item._id}>{item.CCenterName} / {item.Region[0].regionName}</option>)}


                  </select>
                  <span className="form-text text-white">Based on your Location</span>
                </div>
                <div className="form-group search-info">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Counsellor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span className="form-text text-white">
                    Ex : Beti, Abebe
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary search-btn mt-0 bg-[#09E5AB]"
                  onClick={filter}
                >
                  <i className="fas fa-search"></i> <span>Search</span>
                </button>
              </form>

            </div>

          </div>

        </div>

        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          
        </div>
      </section>

<br /><br /><br /><br /><br />


      <section className="pb-20 bg-blueGray-200 -mt-24 pt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-8 w-full md:w-4/12 px-4 mt-10 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full   shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <FaEye/>
                  </div>
                  <h6 className="text-xl font-semibold">OUR VISION</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  we envision a world free from sexual violence and a society in which everyone has the equality, freedom and choice to lead the lives they want.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <FaThumbtack/>
                  </div>
                  <h6 className="text-xl font-semibold">OUR MISSION</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  One-Stop Ethiopis is a partnership among govenment agencies, driving transformative culture change to address sexual violence through advocacy, prevention, racial justice, and systems change.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 mt-7 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <FaHandHoldingHeart/>
                  </div>
                  <h6 className="text-xl font-semibold">OUR VALUES</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  Respect for humanity, Promote Gender Equality, Non-Discrimination, Transpatence, Partnership, Innovation and Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Support
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Our expert counsellors and care coordinators are all trauma specialists. They understand the impacts of violence and abuse and work with each person in an empowering and strength-based way to support them to manage and recover from the trauma they have experienced.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
              Our counsellors are available 24 hours a day, seven days a week via telephone or online chat. We also provide face to face counselling in a number of locations across Ethiopia.
              </p>

            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://www.aciafrica.org/image/zambia_1637941059.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold ">
                  It's not okay
                  </h4>
                  <p className="text-md font-light mt-2 ">
                  Violence and abuse is never acceptable and you are not responsible for any form of abuse you have experienced. <br />

There are many excuses that can be used to justify abusive behaviour but it is important to remember that people choose to be violent and abusive.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-5 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
<br /><br /><br /><br /><br />
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://casfv.org/uploads/images/homepage---ctas-161351-shelter_icon.png"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4" >
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold "  >
                  Find services
                  </h4>
                  <p className="text-md font-light mt-2"  >
                  We know that legal terms around sexual, domestic and family violence can be complicated and vary depending upon your state or territory. So, we have provided the links below for you to find out more information about violence and the law in your state or territory.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fa fa-comment-alt"></i>
                      

                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Text Chat
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Text messaging is used between the victim and the counselor.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Blog
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Recent and important information
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-video"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Video Chat</h6>
                      <p className="mb-4 text-blueGray-500">
                      Victim and counselor can converse more effectively via video chat.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Announcement
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Training announcement and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </section>









      <section className="section section-blogs bg-blueGray-100" >

        <div className="container-fluid">
          <div className="section-header text-center aos">
            <h2>Blogs and News</h2>
            
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
            <Link to="blogs" className="btn btn-primary">
              View All
            </Link>
          </div>
        </div>
      </section>





      <section className="pb-20 relative block bg-blueGray-800">
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

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Reach out on
              </h2>
             
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <FaFacebook/>
              </div>
              
              <h6 className="text-xl mt-5 font-semibold text-white">
                Facebook
              </h6>
             
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <FaInstagram/>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Instagram
              </h5>
             
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FaLinkedin/>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Linkedin
              </h5>
              
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FaTwitter/>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
              Twitter
              </h5>
              
            </div>
          </div>
        </div>
      </section>




      <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Contact us?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Complete this form and we will get back to you in 24
                    hours.
                  </p>

                  <form onSubmit={registerMessage}>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message *
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        value={comments}
                        onChange={(e) => setcommnets(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Send Message</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}



export default Home;
