import React from "react";
import "./card-list.styles.css"
import { CountryCard } from "../card/CountryCard";

export const CardList = props => (
    <div className="card-list">
        {props.countries.map(country => (
            <CountryCard key={country.countryInfo.id} country={country} />
        ))}
        
    </div>
);