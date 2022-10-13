import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { decodeToken } from "react-jwt";
import dateFormat from "dateformat";


function VictimAppointment() {


  const [appointments, setAppointments] = useState([]);
  const [users,setUsers]= useState([]);
  const token = localStorage.getItem("token");
  const victim = decodeToken(token);
  console.log("sdfsdf",victim)

  useEffect(() => {
    getAppointments();
    getUsers();
    
  }, []);

  
  const getAppointments = () => {
    axios("http://localhost:5000/api/appointment")
      .then((res) => {
        setAppointments(
          res.data.filter((y) => y.VictimId == victim._doc._id)
          .sort((a, b) => (a.AppointmentDate > b.AppointmentDate ? 1 : -1))
          .sort((a, b) => (a.AppointmentTime > b.AppointmentTime ? 1 : -1))
        );

        console.log("appointments",appointments);
      })
      .catch((err) => console.log(err));

   
    //.filter(y=>y.CounclerId==councler._doc._id
  };

 const getUsers= ()=>{

  axios.get(`http://localhost:5000/api/users`)
  .then((res)=> setUsers(res.data))
  .catch((err)=>console.log(err))

 }

  return (
    <div className="col-md-7 col-lg-8 col-xl-9">
    <div className="appointments">
      {appointments &&
        appointments.map((item) => (
        
          <div className="appointment-list">
            <div className="profile-info-widget">
              <a href="patient-profile.html" className="booking-doc-img">
                <img src={item.Councler&&item.Councler[0].img} alt="User Image" />
              </a>
              <div className="profile-det-info">
                <h3>
                  <a className="font-bold text-base">
                    {item.Councler && users.filter(x=>x._id=== item.Councler[0].userId)&& users.filter(x=>x._id=== item.Councler[0].userId)[0].fullName}
                  </a>
                </h3>
                <div className="patient-details">
                  <h5>
                    <i className="far fa-clock"></i>{dateFormat(item.AppointmentDate)}  {item.AppointmentTime}
                  </h5>
                  {/* <h5>
                <i className="fas fa-map-marker-alt"></i> {item.Victim&&item.Victim[0].fullName.toUpperCase()}
              </h5> */}
                  <h5>
                    <i className="fas fa-envelope"></i>{" "}
                    <a>    {item.Councler && users.filter(x=>x._id=== item.Councler[0].userId)&& users.filter(x=>x._id=== item.Councler[0].userId)[0].email.toUpperCase()}</a>
                  </h5>
                  <h5 className="mb-0">
                    <i className="fas fa-phone"></i>{" "}
                    {item.Councler && users.filter(x=>x._id=== item.Councler[0].userId)&& users.filter(x=>x._id=== item.Councler[0].userId)[0].phoneNumber}
                  </h5>
                </div>
              </div>
            </div>
            <div className="appointment-action">
           
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default VictimAppointment