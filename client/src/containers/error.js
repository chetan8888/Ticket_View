import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "../styles/error.css"

const View = ({error_cod}) => {  
  if (error_cod == 404)
    {
      return (
        <>
          <div className="m">
              <div className="status">
                404 error
              </div>
              <div className="head mt-3">
                This page doesn't exist!
              </div>
              <div className="desc mt-3">
                Check the url and try again!
              </div>
              <div className="row pl-3 mt-3 desc">
                <p className="pr-2 home_text">Or go back to</p>
                <a href="/">Home</a>
              </div>
          </div>
        </>
      );
    }

      else if (error_cod == 401 || error_cod == 403) 
      {
        return (
          <>
            <div className="m">
                <div className="status">
                  401 error
                </div>
                <div className="head mt-3">
                  Authentication Failed!
                </div>
                <div className="desc mt-3">
                  Check your login credentials
                </div>
                <div className="row pl-3 mt-3 desc">
                  <p className="pr-2 home_text">Or go back to</p>
                  <a href="/">Home</a>
                </div>
            </div>
          </>
        );
      }

      else if (error_cod == 429)
      {
        return (
          <>
            <div className="m">
                <div className="status">
                  428 error
                </div>
                <div className="head mt-3">
                  Too many requests!
                </div>
                <div className="desc mt-3">
                  Try again after sometime!
                </div>
                <div className="row pl-3 mt-3 desc">
                  <p className="pr-2 home_text">Or go back to</p>
                  <a href="/">Home</a>
                </div>
            </div>
          </>
        );
      }

      else
      return (
        <>
          <div className="m">
              <div className="status">
                Server Down
              </div>
              <div className="head mt-3">
                It's not you, it's us!
              </div>
              <div className="desc mt-3">
                The server is down, try again after sometime!
              </div>
              <div className="row pl-3 mt-3 desc">
                <p className="pr-2 home_text">Or go back to</p>
                <a href="/">Home</a>
              </div>
          </div>
        </>
      );
  };
  
  export default View;
  