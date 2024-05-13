import { CountryCardProps } from "@/components/CountryCard";
import { COUNTRY } from "@/graphql/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/CountryDetails.module.css";

const CountryDetails = () => {
  const router = useRouter();
  const { data: countryData, loading } = useQuery(COUNTRY, {
    variables: { code: router.query.code },
  });
  const [country, setCountry] = useState<CountryCardProps>();

  useEffect(() => {
    if (router.query.code && countryData && countryData.country) {
      setCountry(countryData.country);
    }
  }, [countryData, router.query.code]);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.emoji}>{country?.emoji}</div>
          <h2 className={styles.title}>{country?.name}</h2>
          <section className={styles.section}>
            <div className={styles.item}>
              <span className={styles.label}>Country Code:</span>
              <span className={styles.value}>{country?.code}</span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Continent:</span>
              <span className={styles.value}>{country?.continent?.name}</span>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
