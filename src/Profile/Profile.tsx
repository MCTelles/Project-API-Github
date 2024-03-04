import { BiTrash } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import styles from "./Profile.module.scss";

interface ProfileProps {
  index: number;
  avatar: string;
  nametag: string;
  githubUrl: string;
  removeUser: (username: string, indexUser: number) => void;
}

export function Profile({
  index,
  avatar,
  nametag,
  githubUrl,
  removeUser,
}: ProfileProps) {
  return (
    <div className={styles.card}>
      <BiTrash
        className={styles.removeCard}
        size={20}
        onClick={() => removeUser(nametag, index)}
      />

      <div
        className={styles.avatarContainer}
        style={{
          backgroundImage: `url(${avatar || "/src/assets/avatarIcon.png"})`,
        }}
      >
        <div className={styles.overlay}>
          <span>Ver detalhes</span>
        </div>
      </div>

      <span className={styles.nametag}>
        {nametag}{" "}
        {githubUrl ? (
          <FaGithub
            className={styles.goProfile}
            size={20}
            onClick={() => window.open(githubUrl)}
          />
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}
