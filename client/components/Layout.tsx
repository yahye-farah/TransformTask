import Header from './Header';
import styles from '../styles/Home.module.css';
import React from 'react';

interface R {
  children: React.ReactNode;
}

export default function Layout({ children }: R) {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.contentContainer}>{children}</div>
    </main>
  );
}
