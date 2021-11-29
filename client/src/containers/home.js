import React, { useState, useEffect } from "react";
import "../styles/home.css"
import { Navbar, Container, Nav } from "react-bootstrap";

const View = () => {
  return (
    <>
      <div class="top_div">

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="d-flex justify-content-between">
            <div>
              <Navbar.Brand>CHETAN GOUR</Navbar.Brand>
            </div>
          
            <div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="https://www.zendesk.com">Zendesk</Nav.Link>
                  <Nav.Link href="http://www.chetangour.me">About Me</Nav.Link>
                </Nav>

                <Nav className="me-auto">
                  <Nav.Link href="https://github.com/chetan8888/Ticket_View">Github Repository</Nav.Link>
                  <Nav.Link href="/tickets">View Tickets</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </div>      
          </Container>
        </Navbar>

        <div className="main_text">
          <div className="zcc">
            ZENDESK CODING CHALLENGE
          </div>

          <div className="info_text">
            This project is submitted to Zendesk as part of the coding challenge for the position of Software Engineer Intern Summer (2022). It shows all the tickets available on my account in a tabular form and also shows the details of an individual ticket on a separate page. The application is built upon the Node.js and React frameworks and uses Node's Express library as it's server. Further technical details are provided on the github repository's Readme file. 
          </div>
          <div className="info_text mt-2">
            Click on the View Tickets link in the header to navigate to the tickets table page.
          </div>
        </div>
        

      </div>
    </>
  );
};

export default View;
