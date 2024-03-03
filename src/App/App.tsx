import { Profile } from "../Profile/Profile";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";

interface UsersProps {
  id: number;
  avatar: string;
  name: string;
  githubUrl: string;
}

export function App() {
  const [users, setUsers] = useState<UsersProps[]>([]);

  const getContent = async () => {
    const fetchGitHubAPI = await fetch("https://api.github.com/users");
    const data = await fetchGitHubAPI.json();

    const formattedData: UsersProps[] = data.map((value) => {
      return {
        id: value.id,
        avatar: value.avatar_url || "src/assets/avatarIcon.png",
        name: value.login,
        githubUrl: value.html_url,
      };
    });

    setUsers(formattedData);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.titles}>
        <h1>Lista de Usuários GitHub</h1>

        <img src="/src/assets/github-logo.png" alt="" />
      </div>

      <section className={styles.cardsContainer}>
        {users.map((user) => (
          <Profile key={user.id} avatar={user.avatar} nametag={user.name} />
        ))}
      </section>
    </main>
  );
}
