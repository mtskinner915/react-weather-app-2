import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li className="day-time">
          Last updated: <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span>
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={55}
            />
          </span>
          <span>
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
        <div className="col-6">
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
  );
}
