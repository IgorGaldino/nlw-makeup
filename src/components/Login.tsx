import { GetServerSideProps } from 'next';
import { useState } from 'react';
import styles from '../styles/components/Login.module.css';

export function Login(props) {

  const [user, setUser] = useState("");

  function realizarLogin() {
    console.log("Efetuando login...", user);
  }

  return (
    <div className={styles.container}>
      <section>
        <header>
          <img src="/logo-full.svg" alt="Logo"/>
        </header>
        <main>
          <h3>Bem-vindo</h3>
          <div className={styles.infoLogin}>
            <img src="/github.svg" alt="Github"/>
            <p>Faça o login com seu Github para começar</p>
          </div>
        </main>
        <footer>
          <input
            type="text"
            placeholder="Digite seu user name"
            value={user}
            onChange={event => setUser(event.target.value)}
          />
          <button
            type="button"
            onClick={realizarLogin}
          >->
          </button>
        </footer>
      </section>
    </div>
  )
}