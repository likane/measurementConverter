import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Menu from "./components/dashboard/Menu";
import Sidebar from "./components/dashboard/Sidebar";
import Container from "./components/dashboard/Container";
import Length from "./components/dashboard/Length";
import Temperature from "./components/dashboard/Temperature";
import Volume from "./components/dashboard/Volume";
import Weight from "./components/dashboard/Weight";

function App() {
  return (
    <Fragment>
      <Menu />
      <Route exact path="/" component={Container} />
      <section>
        <Sidebar />
        {/* <Container /> */}
        <Route exact path="/length" component={Length} />
        <Route exact path="/temperature" component={Temperature} />
        <Route exact path="/volume" component={Volume} />
        <Route exact path="/weight" component={Weight} />
        {/* <Route exact path="/length" component={Length} /> */}
      </section>
    </Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
