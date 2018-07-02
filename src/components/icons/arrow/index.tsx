import React from 'react';
import styles from './styles.css';

const Arrow = () => (
  <svg viewBox="0 0 100 100" className={styles.svg}>
    <polygon points="50,16 85,85 15,85 50,16" />
  </svg>
);

export default Arrow;
