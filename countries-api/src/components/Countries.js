import React from "react";
import Country from "../components/Country";
function Countries({ data, page, darkMode, handler }) {
  const setCountry = (country) => {
    handler(country);
  };
  if (!data) return null;
  const resPerPage = 20,
    start = (page - 1) * resPerPage,
    end = page * resPerPage;
  const dataPortion = data
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    .slice(start, end);
  const countries = dataPortion.map((country) => {
    return <Country data={country} darkMode={darkMode} handler={setCountry} />;
  });
  // Regular Methods

  return countries;
}

export default Countries;
