import styles from '../styles/components/Login.module.css';

export function Login() {
  return(
    <div className={styles.container}>
      <section>
        <div>
          <img src="/logo-full.svg" alt="Logo"/>
        </div>
        <div>
          <h3>Bem-vindo</h3>
          <p>Faça o login com seu Github para começar</p>
        </div>
        <div>
          <input type="text" placeholder="Digite seu user name"/>
          <button type="button">-></button>
        </div>
      </section>
    </div>
  )
}