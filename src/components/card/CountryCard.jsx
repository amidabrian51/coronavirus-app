import React from "react";
import "./CountryCard.styles.css";

export const CountryCard = props => (
    <div className="card-container">
    <img alt="flag" src={props.country.countryInfo.flag} />
    <h1>{props.country.country}</h1>
    <p>Total Cases {props.country.cases}</p>
    <p>Todays Cases {props.country.todayCases}</p>
    <p>Cases per million {props.country.casesPerOneMillion}</p>
    </div>
)
