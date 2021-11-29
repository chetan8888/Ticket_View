import React from "react";
import "../styles/header.css"

const Header = () => {

  return (
    <div className="head d-flex justify-content-between">
        <a href="https://www.zendesk.com/">
            <img className="head_img" src="./logo.png"></img>
        </a>

        <div className="pt-3 pr-5">
            <a className="mx-4" href="/">Home</a>
            <a href="/tickets">Tickets</a>
        </div>
    </div>
  );
};

export default Header;
