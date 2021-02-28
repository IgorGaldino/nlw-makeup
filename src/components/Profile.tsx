import { useContext } from 'react';
import { ChallengesContext } from '../contexts/CallengesContext';
import styles from '../styles/components/Profile.module.css';

const name = "Igor Galdino";
export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/igorGaldino.png" alt={name} />
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}