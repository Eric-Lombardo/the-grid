import Image from 'next/image';
import profile from '../public/img/hero/profile.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.profile}
        src={profile}
        alt='profile picture'
        width={200}
        height={200}
      />
      <p className={styles.description}>
        Frontend developer with a background in 3D animation. Huge React fan!
      </p>
    </div>
  );
};

export default Hero;
