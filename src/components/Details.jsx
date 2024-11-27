import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation();

  if (!state || !state.country) {
    return <p>No kingdom selected!</p>;
  }

  const { country } = state;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Kingdom of {country.name.common}</h2>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={{ width: "250px", height: "auto", marginTop: "10px" }}
      />
      <p>
        <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
    </div>
  );
}

export default Details;
