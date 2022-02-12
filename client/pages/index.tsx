import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Transform } from '../interface/Transform';
import Form from '../components/Form';

export interface Props {
  transformList: Transform[];
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transformation</title>
        <meta name="description" content="Transformation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
    </div>
  );
};

export default Home;
