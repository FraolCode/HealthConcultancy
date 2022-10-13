import React, { useState } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { customToast } from '../../customToast'
function AddBlog() {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const createdByy = decodeToken(token).email;
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setImg(e.target.files[0]);
  };
  const Submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", title);
    formData.append("Description", Description);
    formData.append("createdBy", createdByy);

    axios
      .post("http://localhost:5000/api/blogs/create", formData, {})
      .then((res) => {
        customToast("Successfuly Added", 0);

        setImg(null);
        setTitle("");
        setDescription("");
        navigate("/admindashboard/blog");
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
                  Add Blog
                  </h4>


                  <form onSubmit={Submit}>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        
                      >
                        Blog Image
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
                        
                      >
                        Blog Title
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className=" form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Titel"
                        required
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        
                      >
                        Blog Description
                      </label>
                      
                      <div >
                      <textarea
                        rows="5"
                        cols="5"
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Enter text here"
                        required
                      >
                        {Description}
                      </textarea>
                    </div>
                    </div>

                   

                    


                    <div className="text-center mt-6">
                      <button type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Add Blog</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          
        </div>
      </section>



























































      

    </>


  );
}

export default AddBlog;
