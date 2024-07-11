import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import styles from "../styles/Profile.module.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [githubProfiles, setGithubProfiles] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const docRef = doc(db, "profiles", "YOUR_DOCUMENT_ID"); // Replace with your document ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfile(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    const fetchGithubProfiles = async () => {
      const querySnapshot = await getDocs(collection(db, "profile_github"));
      const profiles = querySnapshot.docs.map((doc) => doc.data());
      setGithubProfiles(profiles);
    };

    fetchProfile();
    fetchGithubProfiles();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profileInner}>
        <div className={styles.profileHeader}>
          <img
            src={profile.imageUrl}
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileContent}>
          <h2>{profile.name}</h2>
          <p className={styles.subTitle}>{profile.title}</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{profile.followers}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{profile.following}</span>
              <span className={styles.statLabel}>Following</span>
            </div>
          </div>
          <button className={styles.followButton}>Follow</button>
          <p className={styles.description}>{profile.description}</p>
          <div className={styles.socialLinks}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.kaggle} target="_blank" rel="noopener noreferrer">
              Kaggle
            </a>
          </div>
          <div className={styles.githubProfiles}>
            <h3>GitHub Profiles</h3>
            {githubProfiles.map((githubProfile, index) => (
              <div key={index} className={styles.githubProfile}>
                <p className={styles.githubUsername}>
                  {githubProfile.username}
                </p>
                <p className={styles.githubDetails}>{githubProfile.details}</p>
                <a
                  href={githubProfile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
