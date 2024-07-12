import styles from "../styles/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileInner}>
        <div className={styles.profileHeader}>
          <img
            src="/harsh.jpeg"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileContent}>
          <h2>Harsh-BH</h2>
          <p className={styles.subTitle}>GitHub Profile</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>0</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Following</span>
            </div>
          </div>
          <button className={styles.followButton}>Follow</button>
          <p className={styles.description}>
            Morgan has collected ants since they were six years old and now has
            many dozen ants but none in their pants.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Harsh-BH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.dot}></span> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-bhatt-114a2a293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.dot}></span> LinkedIn
            </a>
            <a
              href="https://www.kaggle.com/iharshbhatt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.dot}></span> Kaggle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
