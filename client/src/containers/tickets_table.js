import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Tab } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
// import Customer from "../customer/customer";
import { tickets_list_columns, tickets_data } from "./tickets_data";
// import { PRODUCT_LIST, TOP_PRODUCTS } from "../../api";

const View = () => {

  const [isLoading_tickets_list, setLoading_tickets_list] = useState(true);
  const [table_tickets_list, setTable_tickets_list] = useState({
    columns: tickets_list_columns,
    data: tickets_data,
  });

  // useEffect(() => {
  //   // List Tickets
  //   axios.get(PRODUCT_LIST).then((response) => {
  //     setTable_product_list((prevState) => ({
  //       ...prevState,

  //       data: response.data,
  //     }));
  //     setLoading_product_list(false);
  //   });
  // }, []);

  // if (isLoading_product_list || isLoading_top_products_list) {
  //   return <div className="main">Loading...</div>;
  // }

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
                      pagination = {true}
                      paginationRowsPerPageOptions = {[25,50,75,100,125150]}
                      highlightOnHover
                    />
                  </DataTableExtensions>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
