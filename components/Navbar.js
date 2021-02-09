import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Navbar = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="memories.png" type="image/x-icon" />
        <title>AV Memories</title>
      </Head>
      <nav>
        <Link href="/">
          <a className="logo">
            <Image src="/memories.png" width={70} height={70} alt="aot" />
          </a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
