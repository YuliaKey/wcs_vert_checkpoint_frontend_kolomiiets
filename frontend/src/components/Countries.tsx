import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import CountryCard, { CountryCardProps } from "./CountryCard";
import { COUNTRIES } from "@/graphql/client";
import { AddCountryForm } from "./AddCountryForm";

const Countries = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(COUNTRIES);

  const [countries, setCountries] = useState<CountryCardProps[]>([]);

  useEffect(() => {
    if (!loading && !error && data) {
      setCountries(data.countries);
    }
  }, [loading, error, data]);

  if (loading)
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <AddCountryForm />
      <div className="countries mt-50">
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            name={country.name}
            emoji={country.emoji}
            onClick={(event?: React.MouseEvent<HTMLButtonElement>) => {
              event?.stopPropagation();
              router.push(`/country/${country.code}`);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
