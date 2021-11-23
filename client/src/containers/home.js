import React, { useState, useEffect } from "react";
import "../styles/home.css"

const View = () => {
  return (
    <>
      <div className="top_div row">
        <div className="col-4 logo_div">
          <img className="logo_img" src="logo.png" alt="Zendesk"></img>
        </div>

        <div className="col-8 right_div">
          <div className="mt-4 zend">
            Zendesk Engineering Intern Coding Challenge
          </div>
          <div className="mt-4 contact">
            Candidate Name: Chetan Gour
          </div>
          <div className="mt-4 contact">
            Phone: +1 6696094094
          </div>
          <div className="mt-4 contact">
            Email: chetangour88@gmail.com
          </div>
          <div className="mt-4 contact">
            <a href="https://github.com/chetan8888/Ticket_View">
              Project Github Repository Link
            </a>
          </div>
          <div className="mt-4 contact">
            Click this button to view all tickets.
          </div>
          <button className="btn btn-outline-dark mt-2"> <a href="/tickets">View Tickets</a> </button>
        </div>
      </div>
    </>
  );
};

export default View;
