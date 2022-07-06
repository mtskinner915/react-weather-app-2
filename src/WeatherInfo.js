import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li className="day-time">
          Last updated: <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <span className="Degree">
              {Math.round(props.data.temperature)}{" "}
            </span>
            <span className="Units">°C | °F</span>
          </div>
          <div className="col">
            <ul className="Weather-details">
              <li className="text-capitalize">
                Condition: {props.data.description}
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}m/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
