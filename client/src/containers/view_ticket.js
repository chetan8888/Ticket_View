import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { tickets_list_columns } from "./tickets_data";
import { get_ticket_details } from "../apihelper";

var abc = "hi"
const View = () => {

  const [isLoading_ticket, setLoading_ticket] = useState(true);
  const [id, setId] = useState("")
  const [subject, setSubject] = useState("")
  const [creation_date, setCreation_date] = useState("")
  const [creation_time, setCreation_time] = useState("")
  const [cced, setCced] = useState("")
  const [priority, setCriority] = useState("")
  const [type, setType] = useState("")
  const [status, setStatus] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tick_id = queryParams.get('id')
    console.log(tick_id)

    

    const get_details_func = async () => 
    {
      const ticket_data = await get_ticket_details();
      console.log(ticket_data)

      setId(ticket_data.id)
      setSubject(ticket_data.id)
      setCreation_date(ticket_data.id)
      setCreation_time(ticket_data.id)
      setCced(ticket_data.id)
      setCriority(ticket_data.id)
      setType(ticket_data.id)
      setStatus(ticket_data.id)
      setDescription(ticket_data.id)

      setLoading_ticket(false)
    };

    get_details_func()
    

  }, []);

  if (isLoading_ticket) {
    return <div className="main">Loading...</div>;
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main">
                
                  <div>
                      Ticket ID: {id}
                  </div>

                  <div>
                      Subject: {subject}
                  </div>

                  <div>
                      Creation Date: {creation_date}
                  </div>

                  <div>
                      Creation Time: {creation_time}
                  </div>

                  <div>
                      CCed Participants
                  </div>

                  <div>
                      {cced}
                  </div>

                  <div>
                      Priority: {priority}
                  </div>

                  <div>
                      Type: {type}
                  </div>

                  <div>
                      Status: {status}
                  </div>

                  <div>
                      Description
                  </div>

                  <div>
                      {description}
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
