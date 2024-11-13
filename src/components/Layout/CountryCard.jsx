import React from "react";
import { NavLink } from "react-router-dom";

function CountryCard({ country }) {
  const { flags, name, capital, region, population } = country;
  return (
    <li className="country country-card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />

        <div className="country-Info">
          <p className="card-title">{name.common}</p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button>Read More..</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
}

export default CountryCard;