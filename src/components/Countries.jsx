import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    const countryCode = event.target.value;
    const country = countries.find((c) => c.cca2 === countryCode);
    if (country) {
      navigate(`/countries/${country.cca2}`, { state: { country } });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>World Kingdoms</h1>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Select a kingdom
        </option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
}

export default Countries;
