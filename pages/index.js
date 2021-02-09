import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>AV List | Home</title>
        <meta name="keywords" content="lists" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi
          rerum fuga ab! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Itaque, nesciunt? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Possimus, corrupti!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident quae architecto labore.
        </p>
        <Link href="/posts">
          <a className={styles.btn}>See Posts</a>
        </Link>
      </div>
    </>
  );
}
