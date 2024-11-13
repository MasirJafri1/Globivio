import React, { useTransition, useEffect, useState } from "react";
import { getCountryData } from "../API/postApi";
import Loader from "./Loader";
import CountryCard from "../components/Layout/CountryCard";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // console.log(res);
      setCountries(res.data);
      // console.log(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((country, index) => {
          return (
            // console.log(country);
            <CountryCard country={country} key={index} />
          );
        })}
      </ul>
    </section>
  );
}

export default Country;
