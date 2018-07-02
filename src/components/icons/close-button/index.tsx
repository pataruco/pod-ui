import React from 'react';
import styles from './style.css';

const CloseButton = () => (
  <svg
    viewBox="0 0 52 52"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svg}
  >
    <circle cx="26" cy="26" r="24" />
    <line x1="15" y1="15" x2="37" y2="37" />
    <line x1="15" y1="37" x2="37" y2="15" />
  </svg>
);

export default CloseButton;
