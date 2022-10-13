import React, { useState } from "react";
import axios from 'axios'
import {customToast} from '../customToast'

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setcommnets] = useState("");
  const [subject, setSubject] = useState("");
  

   function registerMessage(event) {
    event.preventDefault();
    const url = "http://localhost:5000/api/messages/create"

    axios.post(url, {
        name:name,
        email:email,
        comments:comments,
        subject:subject,
      })
      .then(function (response) {  customToast("Successfuly sent",0);
      setName("");
      setEmail("");
      setcommnets("");
      setSubject(""); console.log(response);
      })
      .catch(function (error) {
        customToast(error,1);
      });

    
  }

  return (
    <div className="mt-4">
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
             
              <h2 className="breadcrumb-title">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>

     




      <section className="pb-20 relative block bg-blueGray-700">
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
              Get in touch!
              </h2>
              
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="feather-phone"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
              Phone Number
              </h6>
              <p className="mt-2 mb-4 text-blueGray-400">
              +251 934-468-854
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="feather-mail"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
              Email
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
              Admin@gmail.com
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="feather-map-pin "></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
              Location
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
              Addis Abeba
              </p>
            </div>
          </div>
        </div>
      </section>







      <section className="relative block py-24 lg:pt-0 bg-blueGray-700">
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

export default Contactus;
