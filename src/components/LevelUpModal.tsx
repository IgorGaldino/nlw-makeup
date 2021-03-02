import { useContext } from 'react';
import { ChallengesContext } from '../contexts/CallengesContext';
import styles from '../styles/components/LevelUpModal.module.css'

export function LeveUpModal () {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal"/>
          </button>
        </div>
        <div>
          <h5>Desafios</h5>
          <p>3 completados</p>

          <hr/>

          <h5>Experiência</h5>
          <p>154000 xp</p>

        </div>
      </div>
    </div>
  )
}