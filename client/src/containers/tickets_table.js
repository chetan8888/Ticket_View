import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { tickets_list_columns } from "./tickets_data";
import { getTickets } from "../apihelper";
import css_file from "../styles/tickets_table.css"


const View = () => {

  const [isLoading_tickets_list, setLoading_tickets_list] = useState(true);
  const [table_tickets_list, setTable_tickets_list] = useState({
    columns: tickets_list_columns,
    data: {},
  });

  useEffect(() => {

    const tickets_func = async () => {
      const tickets_data = await getTickets();
      console.log(tickets_data);

      tickets_data.map((ticket) => 
      {
        let d = ticket.created_at
        let ddate = d.split('T');
        let timePieces = ddate[1].split("Z");
        let dtime = timePieces[0].split(".")
        ticket.creation_date = ddate[0]
        ticket.creation_time = dtime
      })

      setTable_tickets_list((prevState) => (
      {
        ...prevState,

        data: tickets_data,
      }));
      setLoading_tickets_list(false);

    };
    tickets_func()

  }, []);

  if (isLoading_tickets_list) {
    return <div className="main">Loading...</div>;
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main">
                  <DataTableExtensions {...table_tickets_list}>
                    <DataTable
                      columns1={table_tickets_list.columns}
                      data1={table_tickets_list.data}
                      noHeader
                      defaultSortField="id"
                      defaultSortAsc={false}
                      pagination
                      highlightOnHover
                      onRowClicked={console.log("dfd")}
                    />
                  </DataTableExtensions>
            </div>
            <div className="click_text mt-n5 pt-1">
              Click on a ticket to see full details
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
