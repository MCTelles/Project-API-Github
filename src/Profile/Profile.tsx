import { BiTrash } from "react-icons/bi";
import styles from "./Profile.module.scss";

interface ProfileProps {
  avatar: string;
  nametag: string;
}

export function Profile({ avatar, nametag }: ProfileProps) {
  return (
    <div className={styles.card}>
      <BiTrash className={styles.removeCard} size={20} />

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

      <span className={styles.nametag}>{nametag}</span>
    </div>
  );
}
