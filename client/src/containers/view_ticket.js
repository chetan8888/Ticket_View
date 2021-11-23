import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { tickets_list_columns } from "./tickets_data";
import { get_ticket_details } from "../apihelper";
import "../styles/view_ticket.css"

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

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tick_id = queryParams.get('id')   

    const get_details_func = async () => 
    {
      const ticket_data = await get_ticket_details(tick_id);
      console.log(ticket_data)

      setId(ticket_data.id)
      setSubject(ticket_data.subject)

      let d = ticket_data.created_at
      let ddate = d.split('T');
      let timePieces = ddate[1].split("Z");
      let dtime = timePieces[0].split(".")

      setCreation_date(ddate[0])
      setCreation_time(dtime)
      setCriority(ticket_data.priority)
      setType(ticket_data.type)
      setStatus(ticket_data.status)
      setDescription(ticket_data.description)

      setLoading_ticket(false)
    };

    get_details_func()
    

  }, []);

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
