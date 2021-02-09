import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>AV List | 404 Not Found</title>
        <meta name="keywords" content="lists" />
      </Head>
      <div className="not-found">
        <h1>Oopss...</h1>
        <h2>Page not found.</h2>
        <p>
          You will be directed to the homepage in 3 seconds, or click this{' '}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
