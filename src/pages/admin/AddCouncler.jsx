import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { customToast } from '../../customToast'

const AddCouncler = () => {
  const [CCentersId, setCCentersId] = useState("");

  const [CCenters, setCCenters] = useState([]);
  useEffect(() => {
    getccenters();
  }, []);
  const getccenters = () => {
    axios("http://localhost:5000/api/ccenters")
      .then((res) => {
        setCCenters(res.data);
        setCCentersId(CCenters[0]);
      })
      .catch((err) => console.log(err));
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState(false);
  const [img, setImg] = useState(null);
  const [gender, setGender] = useState('')

  const token = localStorage.getItem("token");
  const createdByy = decodeToken(token).email;
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const registerCouncler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
    formData.append("location", CCentersId);
    formData.append("status", status);
    formData.append("createdByy", createdByy);
    formData.append("gender", gender);

    axios
      .post("http://localhost:5000/api/councler/create", formData, {})
      .then((res) => {
        customToast("Successfuly Added", 0);

        navigate("/admindashboard/councler");
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
                    Add Councler
                  </h4>


                  <form onSubmit={registerCouncler}>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Profile Image
                      </label>
                      <input
                        type="file"
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={onFileChange}
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                        required
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
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                      >
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="********"
                        required
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Gender
                      </label>


                      <select

                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-control border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        required
                      >
                        <option value="">---Select Gender---</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                      </select>
                      <div className="relative w-full mb-3">

                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Location
                        </label>
                        <select
                          type="text"
                          value={CCentersId}
                          onChange={(e) => setCCentersId(e.target.value)}
                          className="form-control border-0  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          required
                        >
                          <option value={null}>Select Location</option>
                          {CCenters.map((item) => (
                            <SelctOptions item={item} />
                          ))}
                        </select>

                      </div>
                    </div>


                    <div className="text-center mt-6">
                      <button type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Add counsellor</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          
        </div>
      </section>
























































      
    </>

  );
};
const SelctOptions = ({ item }) => (
  <option value={item._id}> {item.CCenterName} </option>
);
export default AddCouncler;
