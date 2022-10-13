import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios';
import Table from '../../components/Table';
const Announcment = () => {

  const [announces, setannounces] = useState([]);

  useEffect(() => {
    getannounces();
    
  }, []);
  const getannounces = () => {
    axios("http://localhost:5000/api/announce")
      .then((res) => setannounces(res.data))
      .catch((err) => console.log(err));
  };


const column =[
  {heading:"Title",value:"title" },
  {heading:"Subject",value:"subject" },
  {heading:"Decription",value:"detail" },
  {heading:"Expired Date Time",value:"expiredDateTime" }
  
]





  return (
    <div className="content container-fluid  rounded-lg  bg-blueGray-100 text-white ">
    <div className="row">
      <div className="col-md-9">
      
      </div>
      <div className="col-md-3 text-md-end">
        <Link
          to="/admindashboard/announcment/addAnnouncment"
          className="btn btn-primary btn-announce mb-3"
        >
          Add Announcment
        </Link>
      </div>
    </div>
    <div className="row">
    <Table title="Announcments" data={announces} column={column} actionNedded={true} collection="announce" editPath="/admindashboard/announcment/AddAnnouncment"/>
    </div>
   
  </div>
  )
}

export default Announcment