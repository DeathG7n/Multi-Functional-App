import React from "react";
import ToDos from "./ToDos";
import Tracker from "./Tracker";
import Home from "./Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import axios from "axios"

export default function Main() {
  const [forecast, setForecast] = React.useState({});
  React.useEffect(() => {
    ;

    const weather = axios.create({
      baseURL:
        "http://api.weatherapi.com/v1/current.json?key=14638040845c4a4f96b101259222406 &q=Nigeria&aqi=yes",
    });
    weather.interceptors.request.use((config) => {
      console.log(config);
    });
    // fetch(
    //   "http://api.weatherapi.com/v1/current.json?key=14638040845c4a4f96b101259222406 &q=Nigeria&aqi=yes"
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setForecast(data));
  }, []);
  console.log(forecast);

  return (
    <BrowserRouter>
      <main className="main">
        <div className="menu">
          <ul>
            <Link className="li" to="/">
              Home
            </Link>
            <Link className="li" to="/todo-list">
              To Do List
            </Link>
            <Link className="li" to="/expense-tracker">
              Expense Tracker
            </Link>
            {/* <div id="weather">
                        <li id="forecast">{forecast.current.condition.text}</li>
                        <li><img src={forecast.current.condition.icon} alt="Weather-icon"/></li>
                    </div> */}
          </ul>
        </div>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo-list" element={<ToDos />} />
            <Route path="/expense-tracker" element={<Tracker />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}
