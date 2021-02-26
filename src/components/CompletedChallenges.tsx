import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChanllenges() {
    return (
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completados</span>
            <span>5</span>
        </div>
    )
}