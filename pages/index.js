import Head from 'next/head';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Head>
        <title key='title'>THE GRID | HOME</title>
      </Head>

      <Hero />
    </>
  );
};

export default Home;
