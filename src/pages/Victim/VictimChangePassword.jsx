import React, { useState } from 'react'
import { decodeToken } from 'react-jwt'
import axios from 'axios'
import { customToast } from '../../customToast'


function VictimChangePassword() {
    const token = localStorage.getItem('token')
    const user = decodeToken(token)

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confimrPassword, setConfirmPassword] = useState("")

    const updatePassword = (e) => {
        e.preventDefault()
        if (user.password != oldPassword) {
            customToast("old password doesn't macth", 1)
        }
        else if (newPassword != confimrPassword) {
            customToast("New password and Old password doesn't macth", 1)
        }
        else {

            axios.put(`http://localhost:5000/api/users/update/${user._id}`, {

                password: newPassword,


            }).then((res) => {

                console.log(res)
                customToast('Successfully Updated', 0)
                logout()

            }).catch((e) => customToast(e, 1))
            const logout = () => {
                localStorage.removeItem("token");
                window.location.href = "/login";
            };
        }
    }

    return (
        <>
            <div className="content container-fluid rounded-lg  bg-blueGray-100 text-white ">

                <section className="w-full col-xl-6 d-flex row  rounded-lg">
                    <div className="container mx-auto px-4">

                        <div className="w-full lg:w-11/12 ">
                            <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg ">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">
                                        Change Password
                                    </h4>


                                    <form onSubmit={updatePassword}>

                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                                            >
                                                Old Password
                                            </label>
                                            <input
                                                type="password"
                                                value={oldPassword}
                                                onChange={(e) => setOldPassword(e.target.value)}
                                                className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Old Password"
                                                required
                                            />
                                        </div>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                                            >
                                                New Password
                                            </label>
                                            <input
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Old Password"
                                                required
                                            />
                                        </div>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                value={confimrPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Old Password"
                                                required
                                            />
                                        </div>


                                        <div className="text-center mt-6">
                                            <button type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Change Password</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
























            
        </>
    )
}

export default VictimChangePassword