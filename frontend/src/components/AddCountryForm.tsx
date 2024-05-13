import { useState } from "react";
import styles from "../styles/AddCountryForm.module.css";
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY, COUNTRIES } from "@/graphql/client";

export const AddCountryForm = () => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");

  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: COUNTRIES }],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addCountry({
      variables: {
        data: {
          name,
          emoji,
          code,
        },
      },
    })
      .then(() => {
        setName("");
        setEmoji("");
        setCode("");
      })
      .catch((error) => {
        console.error("Error adding country:", error);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="emoji" className={styles.label}>
          Emoji:
        </label>
        <input
          type="text"
          id="emoji"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="code" className={styles.label}>
          Code:
        </label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};
