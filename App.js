import React, { useState, useEffect } from "react";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";
import { Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Messages from "./Messages";
import Users from "./Users";
import Kooglelogo from "./kooglelogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import UserCard from "./UserCard";

function App() {
  const urlMain = `https://minitwitterbackend.herokuapp.com`;
  const [users, setUsers] = useState();
  const [messages, setMessages] = useState();

  const getDataAPI = (targetURL, target) => {
    const errorHandler = (error) => {
      // the error is passed as an object
      console.log(`Error Message: ${error.message}`); // does not actual handle the error
    };

    fetch(targetURL)
      .then((response) => {
        if (!response.ok)
          // Failed HTTP status
          throw new Error(
            `An error has occured during the request. HTTP status code: ${response.status}`
          );
        return response.json();
      }, errorHandler)
      .then((data) => {
        data && target(() => data);
        console.log(data);
      })
      .catch(errorHandler);
  };

  useEffect(() => {
    console.log("Start...");

    getDataAPI(urlMain + "/users", setUsers);
    getDataAPI(urlMain + "/messages", setMessages);
  }, [urlMain]);

  return (
    <div className="App">
      {/* <h1>Kookle - Your messenger</h1> */}

      <Col xs={6} md={4} className="logo">
        <Image src={Kooglelogo} alt="Logo" thumbnail/>
      </Col>

      <nav>
        <Link to="/users">Users</Link>
        <Link to="/messages">Messages</Link>
      </nav>

      <Route path="/users">
        <Users users={users} />
      </Route>
      <Route path="/messages">
        <Messages messages={messages} />
      </Route>
    </div>
  );
}

export default App;
