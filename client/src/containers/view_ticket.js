import React, { useState, useEffect } from "react";
import "react-data-table-component-extensions/dist/index.css";
import { get_ticket_details } from "../apihelper";
import "../styles/view_ticket.css"
import Error from "./error"

const View = () => {

  const [isLoading_ticket, setLoading_ticket] = useState(true);
  const [id, setId] = useState("")
  const [subject, setSubject] = useState("")
  const [creation_date, setCreation_date] = useState("")
  const [creation_time, setCreation_time] = useState("")
  const [priority, setCriority] = useState("")
  const [type, setType] = useState("")
  const [status, setStatus] = useState("")
  const [description, setDescription] = useState("")
  const [iserror, setIserror] = useState(false);
  const [error_code, setError_code] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tick_id = queryParams.get('id')   

    const get_details_func = async () => 
    {
      const ticket_data = await get_ticket_details(tick_id);

      if (typeof ticket_data.error == "undefined")
      {
        setId(ticket_data.id)
        setSubject(ticket_data.subject || "Not Defined")

        let d = ticket_data.created_at
        let ddate = d.split('T');
        let timePieces = ddate[1].split("Z");
        let dtime = timePieces[0].split(".")

        setCreation_date(ddate[0] || "Not Defined")
        setCreation_time(dtime || "Not Defined")
        setCriority(ticket_data.priority || "Not Defined")
        setType(ticket_data.type || "Not Defined")
        setStatus(ticket_data.status || "Not Defined")
        setDescription(ticket_data.description || "No Description")

        setLoading_ticket(false)
      }
      else
      {
        setIserror(true);
        setError_code(ticket_data.error);
      } 
      
    };

    get_details_func()
    

  }, []);

  if (iserror) 
  {
    return <Error error_cod={error_code} />
  }

  if (isLoading_ticket) {
    return <div className="main">Loading...</div>;
  }


  return (
    <>
      <div className="p-4">  
        <div className="title">
          TICKET DETAILS
        </div>  

          <div className="row">
              <div className="heading col-4">
                  Ticket ID: {id}
              </div>
              <div className="heading col-4">
                  Status: {status}
              </div>
              <div className="heading col-4">
                  Creation Time: {creation_time}
              </div>
          </div>       

          <div className="row">
            <div className="heading col-4">
                Priority: {priority}
            </div>

            <div className="heading col-4">
                Type: {type}
            </div>
            <div className="heading col-4">
                Creation Date: {creation_date}
            </div>
            
          </div>     
        

        <div className="heading mt-4">
            Subject: {subject}
        </div>

        <div className="heading mt-5">
            Description:
        </div>

        <div className="heading mt-n2 description_text">
            {description}
        </div>
      </div>
    </>
  );
};

export default View;
