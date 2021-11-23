import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./containers/home"
import Tickets_Table from "./containers/tickets_table"
import View_Ticket from "./containers/view_ticket"
import Errorpage from "./containers/error"

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tickets">
            <Tickets_Table />
          </Route>
          <Route exact path="/view_ticket">
            <View_Ticket />
          </Route>
          <Route exact path="/error">
            <Errorpage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
