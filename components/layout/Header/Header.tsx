import useRPSFunContext from "hooks/useRPSFun";
import { FC } from "react";

import styles from "./Header.module.css";

const Header: FC<{}> = () => {
  const { score } = useRPSFunContext();

  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <span>ROCK </span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className={styles.score__box}>
        <span>Score</span>
        <div className={styles.score__box__score}>{score}</div>
      </div>
    </div>
  );
};

export default Header;
