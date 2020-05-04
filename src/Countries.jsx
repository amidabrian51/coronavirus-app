import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchField: ""
    };
    // this.handlechange = this.handlechange.bind(this);
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then(response => response.json())
      .then(countries => this.setState({ countries: countries }));
  }

  handlechange = (e) => {
    this.setState({searchField: e.target.value})
  }
  render() {
    const { countries, searchField } = this.state;
    const filterCountries = countries.filter((country) => country.country.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        
       
        <SearchBox 
          placeholder="Search Countries"
          handlechange={ this.handlechange }
        />
        <CardList countries={filterCountries} />
      </div>
    );
  }
}

export default Countries;
