import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Table from "../../components/Table";

function Messages() {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    axios("http://localhost:5000/api/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMessages();
  }, []);

  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Subject", value: "subject" },
    { heading: "Comments", value: "comments" },
  ];
  return(


    <div className="content container-fluid rounded-lg  bg-blueGray-100 text-white ">
        <Table title="Contact Us Messages" data={messages} column={column} />
        </div>
  ) 
  
  

}

export default Messages;
