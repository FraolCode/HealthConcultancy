import React,{useState} from 'react'
import { decodeToken } from "react-jwt";
import axios from 'axios';
import {customToast} from '../../customToast'

function VictimProfileSetting() {
    const token = localStorage.getItem('token')
    const user = decodeToken(token)
    console.log(user)
    
  const [fullName, setFullName] = useState(user.fullName);
  const [userName, setUserName] = useState(user.userName);
  const [phoneNumber, setPhoneNumber] = useState(user.PhoneNumber);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user._doc.gender)
  const updateProfile = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/users/update/${user._id}`, {

      fullName: fullName,
      userName: userName,
      phoneNumber: phoneNumber,
      email: email,
      gender: gender

    }).then((res) => {
      
      console.log(res)
      customToast('Successfully Updated',0)
      logout()
    
    }).catch((e)=>customToast(e,1))
    const logout = () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    };
  }
        
      return (
        <>


<div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">


          <div className="content container-fluid rounded-lg  bg-blueGray-100 text-white ">

            <section className="w-full col-xl-6 d-flex row  rounded-lg" >
              <div className="container mx-auto px-4">

                <div className="w-full lg:w-11/12 ">
                  <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg ">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold">
                        User Information
                      </h4>


                      <form onSubmit={updateProfile}>

                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                          >
                            Username
                          </label>
                          <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                            required
                          />
                        </div>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                            required
                          />
                        </div>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                            required
                          />
                        </div>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                          >
                            Gender
                          </label>
                          
                          <select class="form-control border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 select" value={gender} onChange={(e) => setGender(e.target.value)} required>

                            <option value="M" >Male</option>
                            <option value="F">Female</option>
                          </select>
                        </div>


                        <div className="text-center mt-6">
                          <button type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Update</button>
                        </div>

                      </form>

                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

























































         

        </div>





      </div>











<br /><br />






































         
        </>
       
      );
}

export default VictimProfileSetting