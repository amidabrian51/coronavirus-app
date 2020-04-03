import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries")
      .then(response => response.json())
      .then(countries => this.setState({ countries: countries }));
  }
  render() {
    const { countries, searchField } = this.state;
    const filterCountries = countries.filter(country => country.country.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <h1>Here is my CoronaVirus App</h1>
        <input
          type="search"
          placeholder="Search Countries"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList countries={filterCountries} />
      </div>
    );
  }
}

export default Countries;
