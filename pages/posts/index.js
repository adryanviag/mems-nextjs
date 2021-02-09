import styles from '../../styles/My.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticProps = async () => {
  const res = await fetch('https://av-myapp-api.herokuapp.com/posts');
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const My = ({ user }) => {
  return (
    <>
      <Head>
        {/* <title>AV List | Posts</title> */}
        <meta name="keywords" content="posts" />
      </Head>
      <div className="">
        <h1>Posts</h1>
        {user.map((item) => (
          <div key={item.id}>
            <a className={styles.single}>
              <h2 style={{ color: '#4979ff' }}>{item.name}</h2>
              {/* <Image src={item.selectedFile} width={200} height={200} /> */}
              <h3>{item.title}</h3>
              <p>{item.message}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default My;
