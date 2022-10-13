import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import { customToast } from '../../customToast'
function AddAnnouncment() {
  const location = useLocation();

  const item = location.state && location.state.item

  console.log("table", item)


  const [title, setTitle] = useState("")
  const [subject, setSubject] = useState("")
  const [detail, setDetail] = useState("")
  const [expiredDate, setExpiredDate] = useState(null)


  const [title2, setTitle2] = useState(item && item.title)
  const [subject2, setSubject2] = useState(item && item.subject)
  const [detail2, setDetail2] = useState(item && item.detail)
  const [expiredDate2, setExpiredDate2] = useState(item && item.expiredDate)
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const createdByy = decodeToken(token).email;



  const registerAnnouncment = (e) => {

    e.preventDefault();


    axios
      .post("http://localhost:5000/api/announce/create", {

        title: title,
        detail: detail,
        subject: subject,
        expiredDateTime: expiredDate,
        createdBy: createdByy

      })
      .then((res) => {
        customToast("Successfuly Added", 0);

        setTitle(null);
        setSubject("");
        setDetail("");
        navigate("/admindashboard/announcment")
        console.log(res);
      });
  };

  const updateAnnouncment = (e) => {

    e.preventDefault();


    axios
      .put(`http://localhost:5000/api/announce/update/${item._id}`, {

        title: title2,
        detail: detail2,
        subject: subject2,
        expiredDateTime: expiredDate2,


      })
      .then((res) => {
        customToast("Successfuly Updated", 0);

        setTitle(null);
        setSubject("");
        setDetail("");
        navigate("/admindashboard/announcment")
        console.log(res);
      });
  };



  return (
    <>
      <section className="relative block py-24 lg:pt-0 bg-blueGray-700">
        <div className="container mx-auto px-4">

          <div className="w-half lg:w-8/12 ">
            <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Add Announcment
                </h4>

                {!item ?
                  <form className="was-validated" onSubmit={registerAnnouncment}>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Title"
                        required
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
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                      >
                        Description
                      </label>
                      
                      <textarea
                          rows="5"
                          cols="5"

                          onChange={(e) => setDetail(e.target.value)}
                          className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter text here "
                          required
                        >{detail}</textarea>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Expired Date
                      </label>
                      <input
                        type="date"
                        value={expiredDate}
                        onChange={(e) => setExpiredDate(e.target.value)}
                        className="form-control border-0 px-6 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    {/* 
                    

                    

                    

                     */}



                    <div className="text-center mt-6">
                      <button type="submit" className=" bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Add Announcment</button>
                    </div>

                  </form> :
                  <form className="was-validated" onSubmit={updateAnnouncment}>

                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        value={title2}
                        onChange={(e) => setTitle2(e.target.value)}
                        className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Title"
                        required
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
                        value={subject2}
                        onChange={(e) => setSubject2(e.target.value)}
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                      >
                        Description
                      </label>
                      <textarea
                        type="Text"
                        rows="5"
                        onChange={(e) => setDetail2(e.target.value)}
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Enter text here"
                        required
                      > {detail2} </textarea>
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Expired Date
                      </label>
                      <input
                        type="date"
                        value={expiredDate2}
                        onChange={(e) => setExpiredDate2(e.target.value)}
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Phone Number"
                        required
                      />
                    </div>



                    <div className="text-center mt-6">
                      <button type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Update Announcment</button>
                    </div>

                  </form>

                }

              </div>
            </div>
          </div>

        </div>
      </section>


    </>


  );
}

export default AddAnnouncment;
