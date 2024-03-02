import { Profile } from "../Profile/Profile";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";

export function App() {
  const [vetor, setVetor] = useState([]);

  const getContent = async () => {
    const content = await fetch("");
  };

  return (
    <main className={styles.main}>
      <div className={styles.titles}>
        <h1>Lista de Usuários GitHub</h1>
        <img src="/src/assets/github-logo.png" alt="" />
      </div>
      <section className={styles.cardsContainer}>
        <Profile
          avatar="/src/assets/SPOILER_background.jpg"
          nametag="Narigudo"
        />
        <Profile avatar="" nametag="Marcelo" />
        <Profile avatar="" nametag="Gustavo" />
        <Profile avatar="" nametag="Lucas" />
      </section>
    </main>
  );
}
