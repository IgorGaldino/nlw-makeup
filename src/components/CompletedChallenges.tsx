import { useContext } from "react";
import { ChallengesContext } from "../contexts/CallengesContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChanllenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.CompletedChallengesContainer}>
      <span>Desafios completados</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
