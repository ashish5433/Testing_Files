import React from 'react';
import styles from '../styles/VideoBackground.module.css';

const VideoBackground = ({ children }) => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
