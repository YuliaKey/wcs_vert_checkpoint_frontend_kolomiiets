import styles from "../styles/CountryCard.module.css";

export type CountryCardProps = {
  id?: number;
  name: string;
  emoji: string;
  code?: string;
  continent?: {
    id: number;
    name: string;
  };
};

type CountryCardComponentProps = CountryCardProps & {
  onClick?: () => void;
};

const CountryCard = ({ name, emoji, onClick }: CountryCardComponentProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div>
        <div>{name}</div>
        <div role="img" aria-label={name}>
          {emoji}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
